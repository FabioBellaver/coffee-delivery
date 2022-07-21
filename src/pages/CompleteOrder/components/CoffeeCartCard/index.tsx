import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";

const url =
  "https://s3-alpha-sig.figma.com/img/f389/2f36/d263d0013831cd5b1fb27c6d2ac64353?Expires=1659312000&Signature=gx9Nb0aJte2tSInND2bl8Ur4ybsQgZR197t6dShttKWGihC5G~54XlRlVkf2lR64E35Bri0dqPCU-5IzLB6YQW17B3r2lWRp-Crkc5HD4BPX4lJlevrIVpnu-0WqFOBjvM23lLmMYGDergCae9F40vXg-cyuqGjr6dUH1q8E~y6sQAVZMK8vabaz2MzgRWUD8VtRteZFTFMdgwHt81AVXqnXfoVmTKzXpf8VwgO5VmNjMqaigSauqlcMEquGOyLDIqoPEJ3w599DQhCSJ8WnM9W6J1ZlwCusHXu6VJSrAQDkItYCyKskKnk7QCY2HvZd82coTmrVQpKTF19HKtFqiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={url} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional </RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9.90</p>
    </CoffeeCartCardContainer>
  );
}
