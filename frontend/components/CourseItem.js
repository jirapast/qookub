import Link from 'next/link';
import React from 'react';
import data from '../utils/sample_data'

export default function CourseItem({ course }) {

    return(
        <>
            {/* { Object.values(course).map((value, index) => {
                return (
                    <div key={index}>
                        <h2>{value.section_name}</h2>

                        <hr />
                    </div>
                );
            })} */}

            { course.map((x) => (
            <>
                <p> section: { x.section_name} </p>
                <ul>
                { x.chapter.map((y) => (
                    <li>
                        chapter: { y }
                    </li>
                )) }
                </ul>
            </>
            )) }
        </>
    )
}