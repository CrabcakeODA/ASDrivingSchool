import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../scss/OnlineResources.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class OnlineResources extends Component {

	handleClick(lang) {
		i18next.changeLanguage(lang);
	}

	render() {
		const { t } = this.props;

		return (
			<div>
				<Container>
					<h2 className="page-title">{t('onlineResource.pageTitle')}</h2>
					<Row>
						<Col md="6">
							<Card className="">
								<Card.Img className="card-image" variant="top" src={require(`../assets/img/pic3.jpg`)} />
								<Card.Body>
									<Card.Title className="pt-3 mt-0">{t('onlineResource.onlineVideo')}</Card.Title>
									<Link to="/online-video" className="btn btn-primary mt-2 mb-4" style={{ backgroundColor: "#006935", border:"none" }}>{t('onlineResource.watchVideo')}</Link>
								</Card.Body>
							</Card>
						</Col>

						<Col md="6">
							<Card>
								<Card.Img className="card-image" variant="top" src={require(`../assets/img/pic4.jpg`)} />
								<Card.Body>
									<Card.Title className="pt-3 mt-0">{t('onlineResource.onlineTest')}</Card.Title>
									<Link to="/online-test" className="btn btn-primary mt-2 mb-4" style={{ backgroundColor: "#006935", border:"none" }}>{t('onlineResource.goToTest')}</Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default withTranslation()(OnlineResources);