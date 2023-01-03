import "./Contact.css"
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { firestore } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore"
 const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",

    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState ({});


    const onFormUpdate =(category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await addDoc(collection(firestore, "contact"), formDetails)
            alert("message envoye")
        } catch(error) {
            alert(error.message)
        }
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className=" align-items-center">
                    <Col md={6}>
                        <img src="image/contact-img.svg" alt="">

                        </img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Adess" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact