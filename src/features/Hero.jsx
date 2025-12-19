import { useNavigate } from "react-router-dom";
import HeroWrapper from "../ui/HeroWrapper";
import Badge from "../ui/Badge";
import { MainHeadline, SubHeadline } from "../ui/Headline";
import ShopButton from "../ui/ShopButton";
import { ArrowRight } from "lucide-react";

function Hero() {
  const navigate = useNavigate();
  return (
    <HeroWrapper>
      <Badge>Collection Vol. 03 — 2025</Badge>
      <MainHeadline>
        Less, but <br /> much better.
      </MainHeadline>
      <SubHeadline>
        Handpicked minimalist essentials for the modern home. Focusing on
        quality materials and timeless design.
      </SubHeadline>
      <ShopButton onClick={() => navigate("/products")}>
        Explore Shop <ArrowRight size={20} />
      </ShopButton>
    </HeroWrapper>
  );
}

export default Hero;
