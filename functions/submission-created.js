
import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: 'gktzqe28',
  dataset: 'production',
  token: 'skSXerlMcMN35EHx36fo9JKbU9ks6P08RrQ9rF28Po2YfuyY3qPz2LcUD3nrs4oaWGoeq0K4sj6YXZERg8jHjyp6i3XqvNBOOr9mU4Stxk0jrxSoZl8v7XRqfX9a81JiFVT6A1rWI2qcU4urb6HlTtifzUuqb4dKN4AaQQ681UL3oNMJMR95'
});

exports.handler = async function (event, context, callback) {
  // Pulling out the payload from the body
  const { payload } = JSON.parse(event.body);

  // Checking which form has been submitted
  const isContactForm = payload.data.formId === "contact-form";

  // Build the document JSON and submit it to SANITY
  if (isContactForm) {
    const contact = {
      _type: "contact",
      name: payload.data.name,
      email: payload.data.email,
      message: payload.data.message,
    };

    const result = await client
      .create(contact)
      .catch((err) => console.log(err));
  }

  callback(null, {
    statusCode: 200,
  });
};