import React,{useState} from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0fd96400-8a88-4fb1-b159-31f31367ac50");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 where-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.589239206603!2d36.93867217141259!3d-0.4025665336816982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a111935d8c299%3A0x4f49f2ec6ae1e48c!2sDedan%20Kimathi%20University%20of%20Technology%2C%20Nyeri%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620079190345!5m2!1sen!2sus" loading="lazy"></iframe>
          </figure>
        </section>

        <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form onSubmit={onSubmit} >
                <div className="input-wrapper">
                  <input type="text" name="fullname" className="form-input name" placeholder="Full name" required data-form-input />
                  <input type="email" name="email" className="form-input email" placeholder="Email address" required data-form-input />
                </div>
                <textarea name="message" className="form-area" placeholder="Your Message" required data-form-input></textarea>
                <button className="form-btn" type="submit" >
                <span>Send Message</span>
                </button>
                <p id="text-send">{result}</p>
            </form>
        </section>

    </article>

  )
}

export default Contact