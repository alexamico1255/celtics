import React, { useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Please wait...";
        resultDiv.classList.add("please-wait");

        try {
            const response = await getEmail();

            if (response && response.status === 200) {
                resultDiv.innerHTML = "Thank you for contacting us. We will be in touch shortly!";
                resultDiv.classList.add("success-message");

                // Display the success message
                const successMessage = document.createElement("div");
                successMessage.className = "success-message";
                successMessage.innerHTML = "Your email has been sent successfully!";
                resultDiv.appendChild(successMessage);

                // Clear the form inputs
                setFormData({ name: '', email: '', message: '' });

                // Remove the success message after 2 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 2000);
            } else {
                resultDiv.innerHTML = "Sorry, your email couldn't be sent.";
                resultDiv.classList.add("error-message");
            }
        } catch (error) {
            console.log(error);
            resultDiv.innerHTML = "Sorry, your email couldn't be sent.";
            resultDiv.classList.remove("please-wait");
            resultDiv.classList.add("error-message");
        }

        // Remove all messages after 2 seconds
        setTimeout(() => {
            resultDiv.innerHTML = "";
        }, 2000);
    };

    const getEmail = async () => {
        const formDataObject = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            access_key: "c94cb2e7-4bad-4705-a0bf-651bea42e9a3"
        };

        const json = JSON.stringify(formDataObject);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: json,
            });
            return response;
        } catch (error) {
            console.log(error);
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Sorry, your email couldn't be sent.";
            resultDiv.classList.remove("please-wait");
            resultDiv.classList.add("error-message");
        }
    };

    return(
        <footer id="main-footer">
            <h1>&copy; Alex Amico</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <h3>Contact Us</h3>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            <div id="result">{result}</div>
        </footer>
    );
};

export default Footer;
