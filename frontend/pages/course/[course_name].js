import Layout from '../../components/Layout';
import CourseItem from '../../components/CourseItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/sample_data';

export default function CourseScreen() {
    const { query } = useRouter();
    const { course_name } = query;
    const course = data.courses.find((x) => x.course_name === course_name);

    return (
        <>
            <p>{JSON.stringify(course.section, null, 4)}</p>
            <CourseItem course = {course.section}/>
        </>
    )
}
