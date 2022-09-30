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
            <div key={x.section_name}>
                <b> section: { x.section_name} </b>
                <ul>
                { x.chapter.map((y) => (
                    <li key={y.name}>
                        chapter: { y.name }
                        <div>
                            <iframe 
                                src={ y.url }
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title={ y.name }
                            />{" "}
                        </div>
                    </li>
                )) }
                </ul>
            </div>
            )) }
        </>
    )
}