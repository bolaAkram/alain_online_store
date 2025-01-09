
import { Form,  Button, Input, Textarea } from '@nextui-org/react';

import React from 'react'

const ContactUsForm = () => {

    const [submitted, setSubmitted] = React.useState<{ [k: string]: FormDataEntryValue } | null>(null);
    const [errors, setErrors] = React.useState<{ [k: string]: string }>({});



    // Real-time password validation
    interface Errors {
        password?: string;
        name?: string;
        terms?: string;
        [key: string]: string | undefined;
    }



    interface FormData {
        name: FormDataEntryValue;
        email: FormDataEntryValue;

    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget)) as unknown as FormData;
        // Custom validation checks
        const newErrors: Errors = {};





        // Username validation
        if (data.name === "admin") {
            newErrors.name = "Nice try! Choose a different username";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors as any);

            return;
        }



        // Clear errors and submit
        setErrors({});
        setSubmitted(data as unknown as { [k: string]: FormDataEntryValue });
    };
    return (
        <>
            <Form
                className="w-full justify-start items-start space-y-4 "
                validationBehavior="native"
                validationErrors={errors}
                onReset={() => setSubmitted(null)}
                onSubmit={onSubmit}
            >
                <div className="flex flex-col gap-4 w-full">
                    <Input
                        classNames={{
                            base: "max-w-full  h-10 mb-4",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper:
                                "h-full rounded-none border-1 border-gray font-normal text-default-500 bg-transparent",
                        }}
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Please enter your name";
                            }

                            return errors.name;
                        }}
                        label="Name"
                        labelPlacement="outside"
                        name="name"
                        placeholder="Enter your name"
                    />

                    <Input
                        classNames={{
                            base: "max-w-full  h-10 mb-4",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper:
                                "h-full rounded-none border-1 border-gray font-normal text-default-500 bg-transparent",
                        }}
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Please enter your email";
                            }
                            if (validationDetails.typeMismatch) {
                                return "Please enter a valid email address";
                            }
                        }}
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                    />




                    <Textarea

                        className="w-full mb-10"

                        label="Your Message"
                        labelPlacement="outside"
                        placeholder="Enter your message here"
                        variant="bordered"
                    />



                    {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

                    <div className="flex gap-4">
                        <Button className="w-full" color="secondary" type="submit" radius='full'>
                            Send Now
                        </Button>

                    </div>
                </div>

                {submitted && (
                    <div className="text-small text-default-500 mt-4">
                        Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
                    </div>
                )}
            </Form>

        </>
    )
}

export default ContactUsForm