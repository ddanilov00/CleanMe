import React from "react";
import ProfileCompany from "./CompanyProfileComponent";
import ProfileUser from "./UserProfileComponent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Profile(props) {
  function renderProfile() {
    const { profile } = props;
    const ActionSection = () => (
      <CardActions key="actions">
        <Button size="small" color="primary">
          <Link to="/profile/edit">Редактировать профиль</Link>
        </Button>
        <Button size="small" color="primary">
          <Link to="/profile/change_password">Изменить пароль</Link>
        </Button>
        <Button size="small" color="primary">
          <Link to="/orders">Мои заказы</Link>
        </Button>
      </CardActions>
    );

    if (profile.role === "company") {
      return [
        <ProfileCompany company={profile} key="company" />,
        ActionSection()
      ];
    } else {
      return [<ProfileUser user={profile} key="user" />, ActionSection()];
    }
  }
  return <div>{renderProfile()}</div>;
}
