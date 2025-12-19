import { RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { PropItem, ValuePropsSection } from "../ui/ValueSectionStyle";

function ValueProps() {
  return (
    <ValuePropsSection>
      <PropItem>
        <div className="icon-box">
          <Truck size={28} />
        </div>
        <h3>Free Shipping</h3>
        <p>On all orders over $100. Delivered to your door in 2025.</p>
      </PropItem>

      <PropItem>
        <div className="icon-box">
          <ShieldCheck size={28} />
        </div>
        <h3>Secure Payment</h3>
        <p>Your data is protected by industry-standard encryption.</p>
      </PropItem>

      <PropItem>
        <div className="icon-box">
          <RotateCcw size={28} />
        </div>
        <h3>Easy Returns</h3>
        <p>30-day no-questions-asked return policy for all items.</p>
      </PropItem>
    </ValuePropsSection>
  );
}

export default ValueProps;
