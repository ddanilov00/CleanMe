import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function OrderCard(props) {
  const {
    classes,
    company,
    customer,
    address,
    date,
    startTime,
    service,
    status,
    role,
    _id,
    acceptOrder,
    rejectOrder,
    email
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Company: {company.name}
        </Typography>
        {role !== "user" && (
          <Typography color="textSecondary" gutterBottom>
            Customer:{" "}
            {(customer &&
              (customer.firstname || customer.surname || customer.email)) ||
              email ||
              ""}
          </Typography>
        )}
        <Typography color="textSecondary" gutterBottom>
          Адрес: {address}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Дата и время: {date} {startTime}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Сервис: {service}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Статус: {status}
        </Typography>
      </CardContent>
      <CardActions>
        {role !== "user" &&
          status === "pending" && [
            <Button key="accept" size="small" onClick={() => acceptOrder(_id)}>
              <p>Принять</p>
            </Button>,
            <Button key="reject" size="small" onClick={() => rejectOrder(_id)}>
              <p>Отклонить</p>
            </Button>
          ]}
        <Button size="small">
          <Link to={`/companies`}>Узнать больше</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

OrderCard.propTypes = {
  classes: PropTypes.object,
  company: PropTypes.object
};

export default withStyles(styles)(OrderCard);
