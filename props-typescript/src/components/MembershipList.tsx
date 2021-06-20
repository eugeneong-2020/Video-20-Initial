import Membership from "../models/membership";
import MembershipItem from "./MembershipItem";
import MembershipItemB from "./MembershipItemB";

const MembershipList = () => {
  const membershipInfo: Membership = {
    name: "Diamond",
    description: "Customer Accumulating $5000 spent enjoy 15% discount",
  };
  return (
    <>
      <h2>Membership Tiers</h2>
      <MembershipItem
        name="Silver"
        description="Customer Accumulating $100 spent enjoy 2% discount"
      />
      <MembershipItem
        name="Gold"
        description="Customer Accumulating $500 spent enjoy 5% discount"
      />
      <MembershipItem
        name="Platinum"
        description="Customer Accumulating $1000 spent enjoy 10% discount"
      />
      <MembershipItemB membership={membershipInfo} />
    </>
  );
};

export default MembershipList;
