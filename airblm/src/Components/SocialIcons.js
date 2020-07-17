import React from "react";

import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Icon } from "@iconify/react";
import tumblrIcon from "@iconify/icons-mdi/tumblr";

const SocialIcons = (social) => {
  const url = social ? new URL(social).host.split(".") : [];
  var icon;
  url.forEach((el) => {
    if (el.includes("facebook")) {
      icon = (
        <Button href={social} target="_blank">
          <FacebookIcon />
        </Button>
      );
    } else if (el.includes("instagram")) {
      icon = (
        <Button href={social} target="_blank">
          <InstagramIcon />
        </Button>
      );
    } else if (el.includes("twitter")) {
      icon = (
        <Button href={social} target="_blank">
          <TwitterIcon />
        </Button>
      );
    } else if (el.includes("tumblr")) {
      icon = (
        <Button href={social} target="_blank">
          <Icon icon={tumblrIcon} width="24" height="24" />
        </Button>
      );
    } else {
      return null;
    }
  });
  return icon;
};

export default SocialIcons;
