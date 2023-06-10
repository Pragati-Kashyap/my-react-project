import React from "react";

export default function Contact () {
    const Contact =({id, img} ) => (
        <div className="row align-items-center justify-content-between ">
            <div className="contact-photo col-12 col-md-6">
                <img src = {img} />
            </div>
            <div className="contact-address col-12 col-md-5">
                <h2>Contact Us</h2>
                <p>We are improving our services to serve you better.</p>
                <div class="contact-info">
                        <p><span>Address:</span> 505 Silk Rd, New York</p>
                        <p><span>Phone:</span> +1 234 122 122</p>
                        <p><span>Email:</span> info.deercreative@gmail.com</p>
                        <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                        <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                    </div>
            </div>
        </div>
    )

    const ContactData = [
        {id : 1, src : "https://themewagon.github.io/alazea/img/bg-img/25.jpg"}
    ]

    return (
        <div className="row breadcrumb">
        {ContactData.map((contact) => (
            <Contact 
            key={contact.id}
            id = {contact.id}
            img= {contact.src} />
        ))}
        </div>
    )
}