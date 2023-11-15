import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <span>
        <img src="https://s3-alpha-sig.figma.com/img/1a0f/1be0/90e0b249ddf438f34c5850744747b61a?Expires=1701043200&Signature=S42LCHy7jh9DhGp-BGUW-90jfrXuKqSgFTunNPObR6abutfQBEIYl7Z5eZlBv-RGBeBOy6KyGbidBf3iBtM5Ij5zwZYA-RHd4VSBX965ZuNfA2FukkDDOem0GA4N1-~8gnp7jPD6RqN3dfiWSCYb03x8xv~Cc7nYgO9n2W-njOFgvEcroQTulQWzQAiZ89p1PSoVAaJpV~rORR58UyGWotuoNFohXNFamFjWcBlthKUbLt0OtGiJ9rMeTNSodFNPDpWq7ug7ytj0uK~dupRln-s-IuNEt7oGJKc7r5cqc~ST3i27A-nLVVPwipKUCH21LCMaXhWjzh4P~Lo1~Y~7hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <input type="search" placeholder="🔍 Search" />
      </span>
    </div>
  );
};

export default Header;
