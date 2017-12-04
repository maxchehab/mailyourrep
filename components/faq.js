import { Heading, Paragraph, Link as A } from "evergreen-typography";
import Box from "ui-box";
import { textSizes } from "../theme";
import { pages } from "./navigation";
import { P, Section } from "./ui";
import CardContainer from "./CardContainer";

export default () => (
  <CardContainer page={pages.FAQ}>
    <Section>
      <Heading size={textSizes.large}>FAQ</Heading>
      <P>
        If you have a question that isn{"'"}t answered here, or just want to get
        in contact with the creators, feel free to send a direct message to{" "}
        <A href="https://twitter.com/flaqueeau">@flaqueeau</A> on Twitter.{" "}
      </P>
    </Section>

    <Section>
      <Heading>Q: Where does the money go?</Heading>
      <P>
        Our current expenses are, in order of cost,{" "}
        <A href="https://lob.com/pricing/letters">Lob</A>, the service we use to
        send the letters, <A href="https://stripe.com/us/pricing">Stripe</A>,
        the service we use to collect payments securely, and{" "}
        <A href="https://www.digitalocean.com/pricing/">Digital Ocean</A>, the
        company we host the site with.
      </P>

      <P>
        In each $1.50, we spend about $0.97 on Lob and $0.30 on Stripe. We
        estimated that we would get a minimum of 100 letters per month, so we
        wanted to leave at least $0.20 cents to cover the cost of Digital Ocean
        Hosting (which is about $20 a month).{" "}
      </P>
      <P>
        As we grow, we may be able to reduce costs by getting a bulk plan for
        lob. That should hopefully allow us to reduce the $1.50 cost.{" "}
      </P>
    </Section>

    <Section>
      <Heading>Q: Do you pay yourself? </Heading>

      <P>Nope! This is an entirely volunteer effort.</P>
    </Section>

    <Section>
      <Heading>Q: Do you share my information? </Heading>
      <P>
        <A href="https://i.imgur.com/QHBzlUv.jpg"> Absolutely not. </A> Not only
        do we not share your info, we don't even store it. All we do is collect
        your info and pass it on to Lob and Stripe and as far as we know, they
        don{"'"}t share your information either. (If they did, we would stop
        using them.)
      </P>
      <P>
        <i> Caveat: </i> While we don't store your info, Stripe and Lob do and
        they share it with us if something goes wrong. For example, if we need
        to give you a refund.{" "}
      </P>{" "}
      <P>
        <i> Caveat to the caveat: </i> Stripe does NOT give us your full credit
        card number. (Although they do give us the last 4 digits).
      </P>
    </Section>

    <Section>
      <Heading>Q: Is it secure and safe?</Heading>
      <P>
        {" "}
        Probably. 🤷‍♀ We{"'"}re not gonna lie, nothing on the internet is 100%
        secure. But we{"'"}ve taken the following steps to be the most secure
        that we can be:
        <ul>
          <li>
            <b> We don't store anything. </b> Not your address, not your name,
            and certainly not your credit card. Even if we were compromised,
            your data is safe because we don't have it.
          </li>

          <li>
            <b> We use Stripe for payments. </b> The form where you type your
            card in? That's not us. That's stripe's. When we get your card, it
            goes directly to them. They're record for security is pretty good
            and they power a large portion of the things you buy online.
          </li>

          <li>
            <b> We use HTTPS. </b> See that little green lock in your address
            bar? That's HTTPS. When you send information over the internet (like
            your name and address for example), it's encrypted. That means some
            nefarious ski-mask-wearing dude on unlocked airport wifi can't
            listen in. Or at least hopefully. Again, nothing's ever 100% secure.
          </li>
        </ul>
      </P>
    </Section>

    <Section>
      <Heading>
        {" "}
        Q: How can I be sure that you{"'"}re doing what you're saying your
        doing?{" "}
      </Heading>

      <P>
        We{"'"}re open source! If you're a techie, you can take{" "}
        <A href="https://github.com/gu-app-club/save-the-net">
          {" "}
          a look at the code here
        </A>. But, if you're still concerned about us, feel free to reach out to
        Evan <A href="https://twitter.com/flaqueeau"> on Twitter.</A> We're real
        people, we'd love to talk!
      </P>
    </Section>
  </CardContainer>
);
