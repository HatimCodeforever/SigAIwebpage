import React from 'react';
import './BottomSection.css';
import { FaEnvelope, FaPhone, FaAddressCard, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function BottomSection() {
    return (
        <div className="bottom-section p-2">
            <div className='bottom-sec2'>
                <div className="row p-0 ml-3">
                    <div className="col-md-4 col-sm-12">
                        <h3>About Us</h3>
                        <p>DJS ACM SIGAI is a new student chapter founded by the AI&ML department, dedicated to introducing students to the rapidly expanding and interdisciplinary field of Artificial Intelligence 🤖 and Machine Learning 📊 through seminars, 📝workshops, 🧰 and events 🎉 throughout the year.</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li><FaPhone /> 9082385455</li>
                            <li><FaEnvelope /> sigai2023@gmail.com</li>
                            <li><FaAddressCard /> No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme, Vile Parle, Mumbai, Maharashtra 400056</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h3>Follow Us</h3>
                        <ul className="social-list">
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="https://instagram.com/djs.sigai?igshid=ZDdkNTZiNTM="><FaInstagram /></a></li>
                            <li><a href="#"><FaYoutube /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomSection;
