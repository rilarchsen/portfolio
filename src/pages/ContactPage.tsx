import {Button, Card, Label, Textarea, TextInput} from 'flowbite-react';
import {HiMail, HiUser} from "react-icons/hi";
export default function ContactPage() {
  return (
    <div className={"flex flex-col items-center"}>
      <h1 className={"text-2xl text-center"}>Feel free to contact me using the form below</h1>
      <Card className={"my-4"}>
        <form className="flex max-w-md flex-col gap-4 md:w-96 w-full" action="https://public.herotofu.com/v1/b5afb110-5557-11ee-9a5e-cf86fe56739d" method="post" acceptCharset="UTF-8">
          <div className={"flex flex-col gap-3"}>
            <div>
              <div className="mb-1">
                <Label
                  htmlFor="name"
                  value="Your name"
                />
              </div>
              <TextInput
                id="name"
                name="name"
                icon={HiUser}
                required
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-1">
              <Label
                htmlFor="email"
                value="Your email"
              />
            </div>
            <TextInput
              id="email"
              name="email"
              icon={HiMail}
              placeholder="your@email.com"
              required
              type="email"
            />
            <div
              className="max-w-md"
              id="textarea"
            >
              <div className="mb-2">
                <Label
                  htmlFor="message"
                  value="Your message"
                />
              </div>
              <Textarea
                id="message"
                name="message"
                placeholder="What do you have to say?"
                required
                rows={4}
                className="text-sm"
              />
            </div>
            <div>
              <div style={{textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute"}} aria-hidden="true">
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>
            </div>
          </div>

          <Button type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}