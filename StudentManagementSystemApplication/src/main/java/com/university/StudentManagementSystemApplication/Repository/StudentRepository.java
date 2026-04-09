package com.university.StudentManagementSystemApplication.Repository;

import com.university.StudentManagementSystemApplication.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}