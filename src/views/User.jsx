import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { GetUsers, GetGender } from "../api";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  responsiveBar,
  
} from "variables/Variables.jsx";

class User extends Component {
  state = {
    totalUsers: " ",
    male: "",
    female: "",
    others: ""
  };

  async componentDidMount() {
    const users = await GetUsers();
    const gender = await GetGender();

    this.setState({
      totalUsers: users,
      male: gender.male,
      female: gender.female,
      others: gender.others
    });
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    const { totalUsers, male, female, others } = this.state;
//------------------------------------------------------------
    var dataPie = {
      labels: [male+'%', female+'%', others+'%'],
      series: [male, female, others]
    };
    var legendPie = {
      names: ["Hombres", "Mujeres", "Otros"],
      types: ["info", "danger", "warning"]
    };
//-------------------------------------------------------------
var dataBar = {
  labels: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [312, 243, 280, 580, 353, 333, 300, 364, 368, 410, 636, 495],
    [109, 56, 39, 69, 63, 113, 89, 39, 8, 20, 71, 23]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["Hombres", "Mujeres", "Otros"],
  types: ["info", "danger", "warning"]
};
//------------------------------------------------------------------------
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Total de Usuarios"
                statsValue={totalUsers}
              />
            </Col>
            {/*
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
              */}
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Generos"
                category="Usuarios Registrados"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="Año 2019"
                category="Usuarios registrados por mes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default User;
