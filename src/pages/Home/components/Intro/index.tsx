import { IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from "../../../../assets/intro-img.png";
import { RegularText } from "../../../../components/Typography";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" weight={400}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
        </div>
        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  );
}
