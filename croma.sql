-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 05, 2023 at 03:17 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `croma`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `announcement_id` int(11) NOT NULL,
  `announcement_title` varchar(50) NOT NULL,
  `announcement_datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `announcement_body` text NOT NULL,
  `announcement_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`announcement_id`, `announcement_title`, `announcement_datetime`, `announcement_body`, `announcement_status`) VALUES
(1, 'test', '2023-05-04 15:42:35', 'hello', 'edited'),
(2, 'Announcement 1', '2023-05-04 15:42:48', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'original'),
(4, 'test', '2023-05-05 02:52:48', 'testing\n', 'original'),
(5, 'new announcement testing para ma check gyud', '2023-05-05 02:55:33', 'mao na ni, if dle gni mugana kay naay something sa code', 'original'),
(6, 'other titlesa', '2023-06-03 17:12:54', 'lorem ipsum', 'edited');

-- --------------------------------------------------------

--
-- Table structure for table `authorized_subjects`
--

CREATE TABLE `authorized_subjects` (
  `transaction_id` bigint(30) NOT NULL,
  `subjects_authorized` varchar(255) DEFAULT NULL,
  `auth_instructor` varchar(255) DEFAULT NULL,
  `auth_units` int(11) DEFAULT NULL,
  `auth_time` time DEFAULT NULL,
  `auth_day` varchar(255) DEFAULT NULL,
  `auth_room` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cancelled_subjects`
--

CREATE TABLE `cancelled_subjects` (
  `transaction_id` bigint(30) NOT NULL,
  `subjects_cancelled` varchar(255) DEFAULT NULL,
  `cancelled_instructor` varchar(255) DEFAULT NULL,
  `cancelled_units` int(11) DEFAULT NULL,
  `cancelled_time` time DEFAULT NULL,
  `cancelled_day` varchar(255) DEFAULT NULL,
  `cancelled_room` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `transaction_id` bigint(30) NOT NULL,
  `file` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`transaction_id`, `file`) VALUES
(12306012157494, 0x75706c6f6164732f70696b616d65655f372e6a70672d313638353632373836393633392e6a706567),
(12306012202294, 0x75706c6f6164732f70696b616d65655f362e6a70672d313638353632383134393532362e6a706567),
(12306012222284, 0x75706c6f6164732f686f6e6b61692d737461722d7261696c2d7072652d646f776e6c6f61642d696e7374616c6c2d70632d7365656c652d747261696c65722d62726f6e79612d353530783330392e6a70672d313638353632393334383131322e6a706567),
(12306012226074, 0x75706c6f6164732f34663734666138623937363864633730633739303565363836326532326130315f343839333637313538303931313138383737322e6a7065672d313638353632393536373639362e6a706567),
(12306012337584, 0x75706c6f6164732f43524f4d415f5345525645525f53544550532e7064662d313638353633333837383933362e706466),
(12306012343304, 0x75706c6f6164732f4d616368696e652d50726f626c656d2d332d496e7665737469676174696f6e2e7064662d313638353633343231303239312e706466),
(12306012345154, 0x75706c6f6164732f4d616368696e652d50726f626c656d2d332d496e7665737469676174696f6e2e7064662d313638353633343331353337302e706466),
(12306012347334, 0x75706c6f6164732f4d616368696e652d50726f626c656d2d332d496e7665737469676174696f6e2e7064662d313638353633343435333637332e706466),
(12306012349104, 0x75706c6f6164732f4d616368696e652d50726f626c656d2d332d496e7665737469676174696f6e2e7064662d313638353633343535303730342e706466),
(12306012350364, 0x75706c6f6164732f4d616368696e652d50726f626c656d2d332d496e7665737469676174696f6e2e7064662d313638353633343633363632392e706466),
(12306012354084, 0x75706c6f6164732f4d616368696e652d50726f626c656d2d332d496e7665737469676174696f6e2e7064662d313638353633343834383039372e706466),
(12306012356104, 0x75706c6f6164732f4d616368696e652d50726f626c656d2d332d496e7665737469676174696f6e2e7064662d313638353633343937303639322e706466);

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `form_id` int(11) NOT NULL,
  `form_name` varchar(100) NOT NULL,
  `form_desc` text NOT NULL,
  `form_duration` int(11) NOT NULL,
  `form_payment` int(11) NOT NULL,
  `form_recipients` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`form_id`, `form_name`, `form_desc`, `form_duration`, `form_payment`, `form_recipients`) VALUES
(1, 'True Copy of Grades (TCG)', 'new desc', 7, 50, '3,4,5'),
(2, 'Certification of GWA', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(3, 'Certified True Copy of Form 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(4, 'Cross-Register (Incoming)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(5, 'Overload', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(6, 'Dropping of Courses', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(7, 'Change of Matriculation', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(8, 'Substitution of Courses/Subjects', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(9, 'Apply for Shifting to another Degree Program or Plan within UP Cebu', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(10, 'Apply for Transfer from other schools or UP Units ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(11, 'Apply for Advance Credit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(12, 'Apply for Removal of Incomplete or 4.0', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(13, 'Leave of Absence (LOA)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(14, 'Return from Leave of Absence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(15, 'Letter for Late Payment/Extension of Enrolment', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(16, 'Change in Class Offering', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(17, 'Report of Grades', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(18, 'Justification for Non-dissolution of Small Class S', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(20, 'Form 67A, 67B', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC'),
(21, 'Certification of Underload', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 7, 50, 'UPC');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `notification_datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `notification_body` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `overload_subjects`
--

CREATE TABLE `overload_subjects` (
  `transaction_id` bigint(30) NOT NULL,
  `overload_subjects` varchar(255) DEFAULT NULL,
  `overload_credits` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `signatory`
--

CREATE TABLE `signatory` (
  `user_id` int(11) NOT NULL,
  `signatory_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `user_id` bigint(30) NOT NULL,
  `student_number` varchar(15) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `middle_initial` varchar(5) NOT NULL,
  `year_level` varchar(1) NOT NULL,
  `course` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `registered` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`user_id`, `student_number`, `first_name`, `last_name`, `middle_initial`, `year_level`, `course`, `email`, `registered`) VALUES
(100000, '', '', '', '', '', '', 'kcmanayon@up.edu.ph', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tracking`
--

CREATE TABLE `tracking` (
  `transaction_id` bigint(30) NOT NULL,
  `tracking_status` varchar(100) NOT NULL,
  `tracking_datetime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tracking`
--

INSERT INTO `tracking` (`transaction_id`, `tracking_status`, `tracking_datetime`) VALUES
(12306012143584, 'Awaiting Approval', '2023-06-01 21:43:58'),
(12306012157494, 'Awaiting Approval', '2023-06-01 21:57:49'),
(12306012202294, 'Awaiting Approval', '2023-06-01 22:02:29'),
(12306012222284, 'Awaiting Approval', '2023-06-01 22:22:28'),
(12306012226074, 'Awaiting Approval', '2023-06-01 22:26:07'),
(12306012337584, 'Awaiting Approval', '2023-06-01 23:37:58'),
(12306012343304, 'Awaiting Approval', '2023-06-01 23:43:30'),
(12306012345154, 'Awaiting Approval', '2023-06-01 23:45:15'),
(12306012347334, 'Awaiting Approval', '2023-06-01 23:47:33'),
(12306012349104, 'Awaiting Approval', '2023-06-01 23:49:10'),
(12306012350364, 'Awaiting Approval', '2023-06-01 23:50:36'),
(12306012354084, 'Awaiting Approval', '2023-06-01 23:54:08'),
(12306012356104, 'Awaiting Approval', '2023-06-01 23:56:10');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` bigint(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `signatory_id` int(11) NOT NULL,
  `form_name` varchar(30) NOT NULL,
  `transaction_status` text NOT NULL,
  `transaction_date` datetime NOT NULL DEFAULT current_timestamp(),
  `transaction_ETA` datetime NOT NULL,
  `remarks` text NOT NULL,
  `form_recipients` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transaction_id`, `user_id`, `form_id`, `signatory_id`, `form_name`, `transaction_status`, `transaction_date`, `transaction_ETA`, `remarks`, `form_recipients`) VALUES
(12306012143584, 4, 1, 0, 'True Copy of Grades (TCG)', 'ongoing', '2023-06-01 21:43:58', '2023-06-08 21:43:58', '', ''),
(12306012157494, 4, 2, 0, 'Certification of GWA', 'ongoing', '2023-06-01 21:57:49', '2023-06-08 21:57:49', '', ''),
(12306012202294, 4, 3, 0, 'Certified True Copy of Form 5', 'ongoing', '2023-06-01 22:02:29', '2023-06-08 22:02:29', '', ''),
(12306012222284, 4, 10, 0, 'Apply for Transfer from other ', 'await_approval', '2023-06-01 22:22:28', '2023-06-08 22:22:28', '', ''),
(12306012226074, 4, 11, 0, 'Apply for Advance Credit', 'await_approval', '2023-06-01 22:26:07', '2023-06-08 22:26:07', '', ''),
(12306012337584, 4, 4, 0, 'Cross-Register (Incoming)', 'await_approval', '2023-06-01 23:37:58', '2023-06-08 23:37:58', '', ''),
(12306012343304, 4, 5, 0, 'Overload', 'await_approval', '2023-06-01 23:43:30', '2023-06-08 23:43:30', '', ''),
(12306012345154, 4, 6, 0, 'Dropping of Courses', 'await_approval', '2023-06-01 23:45:15', '2023-06-08 23:45:15', '', ''),
(12306012347334, 4, 7, 0, 'Change of Matriculation', 'await_approval', '2023-06-01 23:47:33', '2023-06-08 23:47:33', '', ''),
(12306012349104, 4, 8, 0, 'Substitution of Courses/Subjec', 'await_approval', '2023-06-01 23:49:10', '2023-06-08 23:49:10', '', ''),
(12306012350364, 4, 9, 0, 'Apply for Shifting to another ', 'await_approval', '2023-06-01 23:50:36', '2023-06-08 23:50:36', '', ''),
(12306012354084, 4, 16, 0, 'Change in Class Offering', 'await_approval', '2023-06-01 23:54:08', '2023-06-08 23:54:08', '', ''),
(12306012356104, 4, 17, 0, 'Report of Grades', 'await_approval', '2023-06-01 23:56:10', '2023-06-08 23:56:10', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_info`
--

CREATE TABLE `transaction_info` (
  `transaction_id` bigint(30) NOT NULL,
  `last_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `middle_initial` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_number` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mobile_number` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `year_level` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `degree_program` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `academic_year` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `semester` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `num_copies` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `purpose` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date` date DEFAULT NULL,
  `overload_credits_total` int(11) DEFAULT NULL,
  `status_last_semester` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `purpose_ext` varchar(255) DEFAULT NULL,
  `others` varchar(255) DEFAULT NULL,
  `subject_dropped` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `instructor_name` varchar(255) DEFAULT NULL,
  `course_description_title` varchar(255) DEFAULT NULL,
  `course_num_section` varchar(255) DEFAULT NULL,
  `units` int(11) DEFAULT NULL,
  `original_grade` varchar(255) DEFAULT NULL,
  `semester_incurred` varchar(255) DEFAULT NULL,
  `academic_year_incurred` varchar(255) DEFAULT NULL,
  `date_completion` date DEFAULT NULL,
  `removal_grade` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `transaction_info`
--

INSERT INTO `transaction_info` (`transaction_id`, `last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `year_level`, `degree_program`, `email`, `academic_year`, `semester`, `num_copies`, `purpose`, `date`, `overload_credits_total`, `status_last_semester`, `reason`, `purpose_ext`, `others`, `subject_dropped`, `section`, `instructor_name`, `course_description_title`, `course_num_section`, `units`, `original_grade`, `semester_incurred`, `academic_year_incurred`, `date_completion`, `removal_grade`, `remarks`) VALUES
(12306012143584, 'Manayon', 'Kyle Alan', 'C.', '2020-00002', '09112233445', '3', 'bscs', 'kcmanayon@up.edu.ph', '2022-2023', '2', '2', 'scholarship', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012157494, 'Manayon', 'Kyle Alan', 'C.', '2020-00002', '09112233445', '3', 'bscs', '', '2022-2023', '2', '2', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012202294, 'Manayon', 'Kyle Alan', 'C.', '2020-00002', '09112233445', '3', 'BS Computer Science', 'kcmanayon@up.edu.ph', '2022-2023', '2', '2', 'scholarship', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012222284, 'Manayon', 'Kyle Alan', 'C.', '2020-00001', '09123456789', '3', 'bscs', '', '2022-2023', '2', '2', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012226074, 'Manayon', 'Kyle Alan', 'C.', '2020-00001', '09123456789', '3', 'bscs', '', '2022-2023', '2', '2', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012337584, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012343304, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012345154, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012347334, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012349104, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012350364, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012354084, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12306012356104, '', '', '', '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `role`) VALUES
('admin@example.com', 'adminpassword'),
('clerk@example.com', 'clerkpassword'),
('kcmanayon@up.edu.ph', 'student'),
('signatory@example.com', 'signatorypassword'),
('student@example.com', 'studentpassword');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`announcement_id`);

--
-- Indexes for table `authorized_subjects`
--
ALTER TABLE `authorized_subjects`
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `cancelled_subjects`
--
ALTER TABLE `cancelled_subjects`
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`form_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `overload_subjects`
--
ALTER TABLE `overload_subjects`
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `signatory`
--
ALTER TABLE `signatory`
  ADD PRIMARY KEY (`signatory_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `tracking`
--
ALTER TABLE `tracking`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `form_id` (`form_id`),
  ADD KEY `transactions_ibfk_1` (`user_id`);

--
-- Indexes for table `transaction_info`
--
ALTER TABLE `transaction_info`
  ADD UNIQUE KEY `transaction_id_2` (`transaction_id`),
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `announcement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `form_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `user_id` bigint(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100001;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `authorized_subjects`
--
ALTER TABLE `authorized_subjects`
  ADD CONSTRAINT `authorized_subjects_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE;

--
-- Constraints for table `cancelled_subjects`
--
ALTER TABLE `cancelled_subjects`
  ADD CONSTRAINT `cancelled_subjects_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE;

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE;

--
-- Constraints for table `overload_subjects`
--
ALTER TABLE `overload_subjects`
  ADD CONSTRAINT `overload_subjects_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`) ON DELETE CASCADE;

--
-- Constraints for table `tracking`
--
ALTER TABLE `tracking`
  ADD CONSTRAINT `tracking_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`form_id`) REFERENCES `forms` (`form_id`) ON DELETE CASCADE;

--
-- Constraints for table `transaction_info`
--
ALTER TABLE `transaction_info`
  ADD CONSTRAINT `transaction_info_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
