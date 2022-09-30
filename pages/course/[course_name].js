import Layout from '../../components/Layout';
import CourseItem from '../../components/CourseItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/sample_data';

export default function CourseScreen({ data }) {
    const { query } = useRouter();
    const { course_name } = query;
    const course = data.find((x) => x.course_name === course_name); 
    // course.section เป็น obj จึงต้อง JSON.stringify() เพื่อแปลงข้อมมูลจาก obj ให้อยู่ในรูปของ json string

    return (
        <Layout title='Course Page'>
           {/* <p>{JSON.stringify(course.section, null, 4)}</p> */}
           <CourseItem course = {course.section}/>
        </Layout>
    )
}

export async function getServerSideProps() {
  
    return {
      props: {
        data: data.courses,
      },
    };
  }
