-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2025 at 09:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cowlha_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('cowlha-cache-356a192b7913b04c54574d18c28d46e6395428ab', 'i:2;', 1762428076),
('cowlha-cache-356a192b7913b04c54574d18c28d46e6395428ab:timer', 'i:1762428076;', 1762428076),
('cowlha-cache-77de68daecd823babbb58edb1c8e14d7106e83bb', 'i:2;', 1762428406),
('cowlha-cache-77de68daecd823babbb58edb1c8e14d7106e83bb:timer', 'i:1762428406;', 1762428406),
('cowlha-cache-c1dfd96eea8cc2b62785275bca38ac261256e278', 'i:2;', 1763177053),
('cowlha-cache-c1dfd96eea8cc2b62785275bca38ac261256e278:timer', 'i:1763177053;', 1763177053),
('cowlha-cache-da4b9237bacccdf19c0760cab7aec4a8359010b0', 'i:1;', 1762428283),
('cowlha-cache-da4b9237bacccdf19c0760cab7aec4a8359010b0:timer', 'i:1762428283;', 1762428283),
('cowlha-cache-giftmeckg@gmail.com|127.0.0.1', 'i:1;', 1762577625),
('cowlha-cache-giftmeckg@gmail.com|127.0.0.1:timer', 'i:1762577625;', 1762577625);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(300) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Human Resources', 'Handles recruitment and employee relations', NULL, NULL),
(2, 'Marketing', 'Manages marketing campaigns and outreach', NULL, NULL),
(3, 'Finance', 'Oversees budgeting and financial planning', NULL, NULL),
(4, 'IT', 'Responsible for information technology and systems', NULL, NULL),
(5, 'Operations', 'Manages day-to-day operations', NULL, NULL),
(6, 'Programs', 'Creates and manages programs', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `department_projects`
--

CREATE TABLE `department_projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `department_id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(300) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(300) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(300) NOT NULL,
  `name` varchar(300) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_11_04_142343_create_projects_table', 1),
(5, '2025_11_06_065548_roles_migration', 1),
(6, '2025_11_06_065922_user_roles_migration', 1),
(7, '2025_11_06_070051_privileges', 1),
(8, '2025_11_06_070212_role_privileges', 1),
(9, '2025_11_06_072348_departments_migration', 1),
(10, '2025_11_06_072738_department_projects_migration', 1),
(11, '2025_11_06_073528_create_staff_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privileges`
--

CREATE TABLE `privileges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `privileges`
--

INSERT INTO `privileges` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(2, 'Manage Users', 'Can create, edit, and delete users', NULL, NULL),
(3, 'Edit Settings', 'Can modify system settings', NULL, NULL),
(4, 'Access Marketing Tools', 'Can use marketing related tools', NULL, NULL),
(5, 'Manage HR Records', 'Can handle human resources records', NULL, NULL),
(7, 'Create customers', 'Be able to create and manage customers', '2025-11-18 13:36:52', '2025-11-18 13:36:52');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `status` enum('Pending','In Progress','Completed','Cancelled','Planned','Ongoing','On-hold') DEFAULT NULL,
  `progress` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `start_date`, `end_date`, `status`, `progress`) VALUES
(6, 'Women Economic Empowerment Initiative', 'Provides vocational skills and business start-up support for women living with HIV across rural districts.', '2024-01-15', '2024-12-20', 'In Progress', 68),
(7, 'Community HIV Prevention & Awareness Campaign', 'Outreach programs promoting HIV testing, stigma reduction, and community sensitization.', '2023-09-01', '2024-06-30', 'Completed', 100),
(8, 'Psychosocial Support for WLHIV', 'Provides counseling services, support groups, and mental health resources for women living with HIV.', '2024-03-01', '2025-02-28', 'In Progress', 40),
(9, 'Adolescent Girls & Young Women HIV Education', 'Delivers school-based HIV education sessions and mentorship for at-risk girls.', '2023-05-10', '2024-11-15', 'On-hold', 55),
(10, 'Nutrition Support for HIV-Positive Women', 'Distribution of nutritional supplements and training on healthy living for immunocompromised women.', '2024-07-01', '2025-07-01', 'On-hold', 0),
(11, 'CHV Capacity Building Initiative', 'Trains volunteers on HIV case management, home-based care, and data reporting.', '2023-11-12', '2024-08-30', 'Completed', 100),
(12, 'GBV Prevention & Response Support', 'Provides GBV awareness education, survivor support services, and community engagement sessions.', '2024-02-01', '2025-01-31', 'In Progress', 32),
(13, 'Digital HIV Information & Reporting System', 'Development of a digital platform to track HIV cases, referrals, and service delivery.', '2023-04-20', '2024-10-01', 'Completed', 100),
(14, 'HIV Policy Advocacy & Rights Campaign', 'Advocacy for improved policies supporting women living with HIV, including access to treatment and human rights protection.', '2024-06-01', '2026-06-01', 'In Progress', 22),
(15, 'PMTCT Support Program', 'Ensures access to prenatal care, ART adherence, and delivery support for HIV-positive pregnant women.', '2024-01-10', '2025-12-30', 'In Progress', 50),
(19, 'Economic Resilience for HIV-Affected Households', 'Supports income-generating activities for households affected by HIV through business training and seed grants.', '2024-02-10', '2025-03-20', 'In Progress', 45),
(20, 'Mobile HIV Testing & Counseling Initiative', 'Deploys mobile clinics to remote villages offering HIV testing, counseling, and ART referrals.', '2023-08-01', '2024-12-31', 'Completed', 100),
(21, 'WLHIV Leadership & Governance Training', 'Builds leadership capacity among women living with HIV to strengthen participation in district HIV coordination structures.', '2024-04-15', '2025-01-30', 'In Progress', 28),
(22, 'Early Childhood Nutrition for HIV-Exposed Infants', 'Provides fortified foods and caregiver education for infants exposed to HIV to improve health outcomes.', '2024-05-20', '2025-05-20', 'On-hold', 0),
(23, 'Community ART Adherence Support Program', 'Trains community mentors to support ART adherence through home visits, reminders, and monitoring.', '2023-10-05', '2024-10-05', 'Completed', 100),
(24, 'Digital Safe-Spaces for Young Women', 'Creates moderated online platforms offering HIV education, mental health support, and SRHR information to young women.', '2024-06-10', '2025-06-10', 'In Progress', 35),
(25, 'HIV & GBV Integrated Response Program', 'Strengthens community-level integrated services addressing gender-based violence and HIV risk among women.', '2024-01-20', '2025-09-15', 'In Progress', 55),
(26, 'Orphans & Vulnerable Children (OVC) HIV Support', 'Provides school materials, psychosocial care, and nutritional support for OVCs in HIV-affected households.', '2023-09-15', '2024-12-01', 'On-hold', 60),
(27, 'Community ART Distribution Outreach', 'Pilots community distribution points to improve ART access for women living in remote areas.', '2024-03-25', '2025-03-25', 'In Progress', 20),
(28, 'WLHIV Legal Rights & Paralegal Training', 'Trains women living with HIV on legal rights, discrimination reporting, and community-based paralegal support.', '2024-04-01', '2025-04-01', 'In Progress', 18),
(29, 'HIV Treatment Literacy Enhancement', 'Conducts community dialogues and workshops to improve understanding of ART adherence and viral suppression.', '2024-05-01', '2025-04-30', 'Ongoing', 42),
(30, 'Rural Women Digital Skills for Health Access', 'Trains rural women on using mobile health apps to access HIV care services and appointment reminders.', '2024-07-10', '2025-08-20', 'Planned', 0),
(31, 'HIV Stigma & Discrimination Reduction Program', 'Engages local leaders and media campaigns to reduce HIV stigma, especially among WLHIV.', '2023-10-01', '2024-09-15', 'Completed', 100),
(32, 'Shelter Support for WLHIV Survivors of GBV', 'Provides temporary safe housing, counseling, and reintegration support for GBV survivors.', '2024-03-15', '2025-03-15', 'In Progress', 30),
(33, 'Young Mothers HIV Support Circles', 'Organizes peer-led support groups for young mothers living with HIV to boost mental health and resilience.', '2024-02-01', '2025-01-20', 'Ongoing', 55),
(34, 'HIV-Sensitive Livelihood Empowerment', 'Supports income-generating activities like tailoring, farming, and mobile vending for HIV-affected women.', '2023-11-25', '2024-11-25', 'In Progress', 63),
(35, 'Community PMTCT Awareness Initiative', 'Promotes awareness on preventing mother-to-child HIV transmission through outreach talks and radio messaging.', '2024-04-01', '2025-02-01', 'Pending', 0),
(36, 'Adolescent HIV Champions Mentorship', 'Recruits and trains adolescent HIV champions to deliver peer education in schools and youth centers.', '2024-01-10', '2025-01-10', 'Ongoing', 47),
(37, 'WLHIV Economic Rights Campaign', 'Advocates for fair workplace policies and economic inclusion for women living with HIV across districts.', '2024-06-05', '2025-06-05', 'Planned', 0),
(38, 'Community-Based HIV Data Collection Training', 'Builds the capacity of community health volunteers to collect accurate HIV service data using digital tools.', '2023-09-20', '2024-10-20', 'On-hold', 70),
(39, 'Community HIV Testing & Linkage Drive', 'Conducts door-to-door HIV testing campaigns and links newly diagnosed women to ART services.', '2024-05-15', '2025-04-10', 'In Progress', 38),
(40, 'Safe Motherhood & HIV Awareness Clinics', 'Provides antenatal HIV awareness, PMTCT counseling, and safe delivery education in rural zones.', '2023-12-01', '2024-09-30', 'Completed', 100),
(41, 'Women-Led HIV Advocacy Fellowship', 'Trains selected WLHIV in advocacy skills to influence district HIV budgeting and policy processes.', '2024-04-05', '2025-05-05', 'Ongoing', 22),
(42, 'SRHR & HIV Integration Outreach', 'Delivers integrated sessions on HIV, family planning, and menstrual health for young women.', '2024-07-01', '2025-06-20', 'Planned', 0),
(43, 'Mobile ART Refill Program', 'Provides monthly ART refills through mobile vans targeting hard-to-reach communities.', '2024-03-12', '2025-03-12', 'In Progress', 50),
(44, 'HIV Risk Reduction for Young Couples', 'Conducts couple-based counseling sessions promoting safer sex practices and HIV prevention knowledge.', '2023-10-20', '2024-10-20', 'On-hold', 67),
(45, 'Village Health Volunteers Strengthening Initiative', 'Equips volunteers with HIV case-tracking tools, referral systems, and digital reporting skills.', '2024-01-05', '2025-01-05', 'Ongoing', 40),
(46, 'HIV Legal Aid Referral Network', 'Establishes community-level referral networks to support WLHIV facing discrimination or property rights abuses.', '2024-02-20', '2025-02-20', 'Pending', 0),
(47, 'Nutrition Screening for HIV-Affected Women', 'Provides regular nutritional assessments and supplements to HIV-affected women at community clinics.', '2023-11-10', '2024-12-15', 'Completed', 100),
(48, 'WLHIV Resilience & Trauma Healing Workshops', 'Offers trauma-informed workshops for women dealing with HIV stigma, loss, and psychological stress.', '2024-05-01', '2025-05-30', 'Ongoing', 29);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Administrator with full access', NULL, NULL),
(3, 'Staff', 'Regular staff member', NULL, NULL),
(4, 'Marketing Officer', 'Oversees marketing activities', NULL, NULL),
(5, 'HR Officer', 'Manages human resources functions', NULL, NULL),
(18, 'ICT Officer', 'Managing the IT infrastructure', '2025-11-17 18:55:09', '2025-11-17 18:55:09'),
(19, 'Field Officer', 'Carries out and manages field work and data', '2025-11-17 19:24:46', '2025-11-17 19:24:46'),
(20, 'Customer support officer', 'Handles customer related matters and complaints', '2025-11-18 13:01:27', '2025-11-18 13:01:27');

-- --------------------------------------------------------

--
-- Table structure for table `role_privileges`
--

CREATE TABLE `role_privileges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `privilege_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_privileges`
--

INSERT INTO `role_privileges` (`id`, `role_id`, `privilege_id`, `created_at`, `updated_at`) VALUES
(4, 3, 3, NULL, NULL),
(5, 4, 4, NULL, NULL),
(6, 5, 5, NULL, NULL),
(10, 18, 3, NULL, NULL),
(12, 19, 4, NULL, NULL),
(13, 19, 5, NULL, NULL),
(15, 20, 4, NULL, NULL),
(16, 20, 5, NULL, NULL),
(17, 3, 7, NULL, NULL),
(18, 1, 7, NULL, NULL),
(19, 5, 7, NULL, NULL),
(26, 18, 2, NULL, NULL),
(27, 1, 2, NULL, NULL),
(28, 4, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('KR1NNTBzpHT2fGtmec2zQvEE1cYm6v5n590sG08B', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiNUhGM0NTREtBdWpJNlVxWWtuQVRWWWFsR0JJM1VTT0tvZkFQSHZMdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcm9qZWN0cy9leHBvcnQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyO30=', 1763927701);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `department_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `user_id`, `department_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 2, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Malani Banda', 'malanibanda@gmail.com', '2025-11-06 09:21:09', '$2y$12$z29EHpkxOzNELb5.5mmeO.Z0.sw28POtvW.EpL0p6ukR5yUYD3.Nq', NULL, '2025-11-06 09:19:47', '2025-11-06 09:21:09'),
(2, 'Gift Meck', 'giftmeck@gmail.com', '2025-11-06 09:23:43', '$2y$12$b.gt/0G5E3t3KoUQvhG05ODqYcrBzpyxCUeCvjww.nyHYlF/Q6HfO', NULL, '2025-11-06 09:22:41', '2025-11-06 09:23:43'),
(5, 'Alfred Phiri', 'alfred@gmail.com', NULL, '$2y$12$pySvin1Swq1sdnBn1xdYnu.5eWd7xZxGsQE1Eo/s6H3NyGx7nbwZe', NULL, '2025-11-14 19:13:42', '2025-11-14 19:13:42'),
(6, 'Hastings Meck', 'hmeck@gmail.com', '2025-11-15 01:23:59', '$2y$12$uBeGotzZ3gQp6WZGTAWlNui2wNZMXFxUboWlNrxDtNIeEPITut3w2', NULL, '2025-11-14 19:15:49', '2025-11-15 01:23:59'),
(8, 'Mercy Banda', 'mercy@gmail.com', NULL, '$2y$12$emX5zoj4gwKlHFMMKVNXZuYxtk9cShjX5.rejtqmGedFJ2IUqiyLC', NULL, '2025-11-17 09:55:54', '2025-11-17 09:55:54');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `roleAssignmentType` varchar(255) NOT NULL DEFAULT 'temporary',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `user_id`, `role_id`, `roleAssignmentType`, `created_at`, `updated_at`) VALUES
(2, 2, 1, 'permanent', NULL, NULL),
(6, 2, 3, 'temporary', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department_projects`
--
ALTER TABLE `department_projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_projects_department_id_foreign` (`department_id`),
  ADD KEY `department_projects_project_id_foreign` (`project_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `privileges`
--
ALTER TABLE `privileges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_privileges`
--
ALTER TABLE `role_privileges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_privileges_role_id_foreign` (`role_id`),
  ADD KEY `role_privileges_privilege_id_foreign` (`privilege_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `staff_user_id_foreign` (`user_id`),
  ADD KEY `staff_department_id_foreign` (`department_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_roles_user_id_foreign` (`user_id`),
  ADD KEY `user_roles_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `department_projects`
--
ALTER TABLE `department_projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `privileges`
--
ALTER TABLE `privileges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `role_privileges`
--
ALTER TABLE `role_privileges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `department_projects`
--
ALTER TABLE `department_projects`
  ADD CONSTRAINT `department_projects_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `department_projects_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_privileges`
--
ALTER TABLE `role_privileges`
  ADD CONSTRAINT `role_privileges_privilege_id_foreign` FOREIGN KEY (`privilege_id`) REFERENCES `privileges` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_privileges_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `staff_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
