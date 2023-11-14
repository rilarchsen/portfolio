import {Button, Modal, TextInput} from "flowbite-react";
import {FormEvent, useState} from "react";

export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await fetch('https://public.herotofu.com/v1/b5afb110-5557-11ee-9a5e-cf86fe56739d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
    } finally {
      setSuccessModal(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (<>
    <form className="space-y-4 w-80 xl:w-96" acceptCharset="UTF-8" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-bold dark:text-gray-200 text-gray-800">Contact Me</h2>
      <TextInput className="text-white" id="name" name={"name"} placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
      <TextInput className="text-white" id="email" name={"email"} placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}  type="email" />
      <textarea
        className="w-full h-32 dark:bg-gray-800 dark:text-white border rounded shadow p-2"
        id="message"
        name={"message"}
        placeholder="Message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button className="bg-gray-700 text-white px-4 py-2 rounded" type="submit">
        Submit
      </Button>
    </form>
    <Modal dismissible show={successModal} onClose={() => setSuccessModal(false)} size={"md"}>
      <Modal.Header>Thank you for your message!</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          Thank you very much for getting in contact with me! I will be sure to get back to you as soon as I possible can 😊
        </div>
      </Modal.Body>
    </Modal>
  </>);
}