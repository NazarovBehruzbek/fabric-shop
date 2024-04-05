import React from "react";
import { Row, Col } from 'antd'
import about from "../images/about.png"
import "./about.css"

function About() {
    return (
        <>
            <div className="about-us">
               <div className="container">
               <h2>
                    Toshkent tabiiy mahsuloti
                </h2>
                <Row>
                    <Col lg={12} md={24}>
                        <p>
                            Toshkentdagi bu kompaniya, sifatli mahsulotlar ishlab chiqarishdagi katta muvaffaqiyatga ega bo'lgan. Ular paxta xomashyoslari, sumkalar va boshqa o'zaro tanqidiy mahsulotlarni ishlab chiqarishda mutaxassislar. Kompaniya o'z faoliyatida ekologik qarorlarga amal qilib, ishlab chiqarish jarayonini toza va ekologik ravishda amalga oshirishga intilgan. Bu esa, ularning ekologik muhim ahamiyatga ega bo'lgan mahsulotlar ishlab chiqarishdagi o'z mas'uliyatiga ishonchini ko'rsatadi.
                        </p>
                        <p>
                        Kompaniya o'z faoliyatida iste'molchilarning talab va takliflarini qo'llab-quvvatlaydi va turli xil paxta xomashyosi turini taqdim etadi. Ularning mijozlariga o'zlariga qiziqarli mahsulotlar taklif etishlari kompaniyani barcha turdagi mijozlarga qiziqarli qiladi.
                        </p>
                    </Col>
                    <Col lg={12} md={24}>
                        <img className="about-img" src={about} alt="Error" />
                    </Col>
                </Row>
               </div>
            </div>
        </>
    )
}
export default About;