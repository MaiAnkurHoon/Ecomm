import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

const ContactUs = async () => {
  const billboard: any = await getBillboard(
    "5a968aa3-d868-4711-a6d4-fd7a0365789f"
  );
  return (
    <Container>
      <Billboard data={billboard} />
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente
        sunt assumenda. Omnis, corrupti odit harum quae aut qui eveniet iste
        neque error? Explicabo dolorem sequi doloribus similique! Quae dicta
        deleniti quia, quidem doloremque impedit quisquam repellendus, cum iusto
        maiores inventore tempore harum. Illo non quam aspernatur odio delectus
        nulla.
      </h2>
    </Container>
  );
};

export default ContactUs;
