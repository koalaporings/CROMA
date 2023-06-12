-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 11, 2023 at 02:16 PM
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
(1, 'Announcement Test', '2023-06-09 02:40:02', 'This is an announcement!', 'original');

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
  `transaction_id` bigint(100) NOT NULL,
  `file` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `form_id` int(11) NOT NULL,
  `form_name` varchar(255) NOT NULL,
  `form_desc` text NOT NULL,
  `form_duration` int(11) NOT NULL,
  `form_payment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`form_id`, `form_name`, `form_desc`, `form_duration`, `form_payment`) VALUES
(1, 'True Copy of Grades (TCG)', 'True Copy of Grades is issued by the College, usually for UP Campus use only and is a document of grades based on Form 5s on file.\n', 7, 50),
(2, 'Certification of GWA', 'You may only request for Certifications if you have no accountabilities with the Library and with the Accounting Office.', 7, 50),
(3, 'Certified True Copy of Form 5', 'You may only request for Certifications if you have no accountabilities with the Library and with the Accounting Office.', 7, 50),
(4, 'Cross-Register (Incoming)', 'Cross-registrants* are students who enroll in UP Cebu for a specific period of time but are primarily enrolled in another UP Constituent University or in another institution of higher learning. Such enrolment is subject to the approval of the Deans of the home and the accepting units/colleges. [UP Code Art. 333−334]', 7, 0),
(5, 'Overload', 'A graduating student with an academic record better than average may be permitted to carry a heavier load in the last year of his course. A maximum of 6 units overload is allowed which may be taken in the first and/or second semester. Application for overload exceeding 6 units may be allowed, only in meritorious cases.', 7, 0),
(6, 'Dropping of Courses', 'A student may, with the consent of his instructor and the Dean, drop a subject by filling out the prescribed UP Form 26 before three-fourths of the hours prescribed for the semester/trimester/quarter term have elapsed, and not later. ', 7, 0),
(7, 'Change of Matriculation', 'All transfers to other classes shall be made only for valid reasons. No change of matriculation involving the taking of a new subject shall be allowed after one week of regular class meetings has been held. Changes in matriculation shall be effected by means of the form for the change of matriculation and must be recommended by the adviser and approved by the Dean.', 7, 0),
(8, 'Substitution of Courses/Subjects', 'Every substitution of subjects must be based on at least one of the following:\na. When a student is pursuing a curriculum that has been superseded by a new one and the substitution tends to bring the old curriculum in line with the now;\nb. Conflict of hours between a required subject and another required subject; or\nc. When the required subject is not given.', 7, 0),
(9, 'Apply for Shifting to another Degree Program or Plan within UP Cebu', 'Secure and fill out the Shifting to another Degree Program or Plan within UP Cebu, in three copies.\nSubmit your Shifting Form to the OCS Staff of your current college.', 7, 0),
(10, 'Apply for Transfer from other schools or UP Units ', 'Students with previous college work from another university (outside UP) who want to transfer to UP Cebu shall satisfy all admission requirements of the University and that of the accepting unit/college. Applicants for transfer shall be considered for admission to the University only during the first semester of each academic year.', 7, 0),
(11, 'Apply for Advance Credit', 'The following rules shall govern the admission of transfer students:\nc. An admitted transfer student may not be allowed to enroll in a subject or subjects the prerequisite of which, taken elsewhere, have not yet been validated or repeated in the University;\nd. An admitted transfer student must validate all the courses he is offering for advanced credits at the rate of at least 18 units a semester within a period not exceeding three semesters from the date of his admission. Failure to comply with this requirement will mean the cancellation of his registration privileges;', 7, 0),
(12, 'Apply for Removal of Incomplete or 4.0', 'The following rules shall govern the admission of transfer students:\nc. An admitted transfer student may not be allowed to enroll in a subject or subjects the prerequisite of which, taken elsewhere, have not yet been validated or repeated in the University;\nd. An admitted transfer student must validate all the courses he is offering for advanced credits at the rate of at least 18 units a semester within a period not exceeding three semesters from the date of his admission. Failure to comply with this requirement will mean the cancellation of his registration privileges;', 7, 0),
(13, 'Leave of Absence (LOA)', 'A student who does not intend to enroll in a semester may apply for a leave of absence (LOA). This also applies to a student currently enrolled and who intends to withdraw his/her enrollment for the rest of the term. A student on leave of absence does not sever their ties with the University. A request for a leave of absence should be made in writing to the Dean. The request should state the reason for the leave and should specify the period. The leave may be approved for a period of one (1) year but may be renewed for at most another year.\n\n', 7, 0),
(14, 'Return from Leave of Absence', 'Write a letter addressed to your Dean, indicating your intent to continue your program of study for the incoming term.\nGet endorsement from your Program Adviser, Department Chair/Program Coordinator, and the College Secretary.', 7, 0),
(15, 'Letter for Late Payment/Extension of Enrolment', 'Write a letter addressed to the Chancellor, through proper channels, to consider your late enrollment by indicating the reasons and your intent to be enrolled and attend classes for the current semester. Get endorsement from your adviser, department chair, college secretary, and college Dean. ', 7, 0),
(16, 'Change in Class Offering', 'This request is for the Change in Class Offering form.', 7, 0),
(17, 'Report of Grades', 'This request is for the Report of Grades form.', 7, 0),
(18, 'Justification for Non-dissolution of Small Class Size', 'This request is for the Justification for Non-dissolution of Small Class Size form.', 7, 0),
(20, 'Form 67A, 67B', 'This request is for the Form 67A and Form 67B.', 7, 0),
(21, 'Certification of Underload', 'This request is for the Certification of Underload.', 7, 0);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL,
  `user_id` bigint(30) NOT NULL,
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
  `user_id` bigint(30) NOT NULL,
  `signatory_id` bigint(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `user_id` bigint(30) NOT NULL,
  `student_number` varchar(15) DEFAULT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `middle_initial` varchar(5) DEFAULT NULL,
  `year_level` varchar(1) DEFAULT NULL,
  `degree_program` varchar(50) DEFAULT NULL,
  `mobile_number` varchar(20) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `registered` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tracking`
--

CREATE TABLE `tracking` (
  `transaction_id` bigint(30) NOT NULL,
  `tracking_status` varchar(100) NOT NULL,
  `tracking_datetime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` bigint(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `signatory_id` int(11) DEFAULT NULL,
  `form_name` varchar(255) NOT NULL,
  `transaction_status` text NOT NULL,
  `transaction_date` datetime NOT NULL DEFAULT current_timestamp(),
  `transaction_ETA` datetime NOT NULL,
  `remarks` text DEFAULT NULL,
  `form_recipients` text DEFAULT NULL,
  `approved_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_info`
--

CREATE TABLE `transaction_info` (
  `transaction_id` bigint(30) NOT NULL,
  `last_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `middle_initial` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `student_number` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile_number` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `year_level` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `degree_program` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `academic_year` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `semester` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `num_copies` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `purpose` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
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
  `date_completion` varchar(255) DEFAULT NULL,
  `removal_grade` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  ADD KEY `files_ibfk_1` (`transaction_id`);

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
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `signatory_ibfk_1` (`email`),
  ADD KEY `signatory_id` (`signatory_id`);

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
  ADD KEY `tracking_ibfk_1` (`transaction_id`);

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
  MODIFY `announcement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `form_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `signatory`
--
ALTER TABLE `signatory`
  MODIFY `user_id` bigint(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `user_id` bigint(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1001;

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
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `students` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `overload_subjects`
--
ALTER TABLE `overload_subjects`
  ADD CONSTRAINT `overload_subjects_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE;

--
-- Constraints for table `signatory`
--
ALTER TABLE `signatory`
  ADD CONSTRAINT `signatory_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`) ON DELETE CASCADE;

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
