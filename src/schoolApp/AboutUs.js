import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/AboutUs.scss';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class AboutUs extends Component {

	handleClick(lang) {
		i18next.changeLanguage(lang);
	}

	render() {
		const { t } = this.props;
		return (
			<div>
				<Container>
					<Row>
						<Col xs={12} md={12}>
							<h2 className="page-title">{t('aboutUs.aboutASDrivingSchool')}</h2>
						</Col>
						{/* introduction */}
						<Col xs={12} md={5}>
							<Card.Img className="schoolImage" src={require(`../assets/img/asdrivingschool.png`)} />
						</Col>

						<Col xs={12} md={7}>
							<p className="content">
								{t('aboutUs.aboutASDrivingSchoolContent.para1')}
							</p>
							<p className="content">
								{t('aboutUs.aboutASDrivingSchoolContent.para2')}
							</p>
							<p className="content">
								{t('aboutUs.aboutASDrivingSchoolContent.para3')}
							</p>
						</Col>
					</Row>
				</Container>

				<Container className="mb-5">
					<Row>
						<Col xs={12} md={12}>
							<h2 className="page-title">{t('aboutUs.featuredInstructors')}</h2>
						</Col>
						{/* coach-Zhang */}
						<Row>
							<Col xs={12} md={7}>
								<p className="content">
									{t('aboutUs.coachZhang.para1')}
									<br /><br />{t('aboutUs.coachZhang.para2')}
									<br /><br />{t('aboutUs.coachZhang.para3')}
									<br /><br />{t('aboutUs.coachZhang.tel')}
								</p>
							</Col>
							<Col xs={12} md={5} >
								<Card.Img className="coachImage" src={require(`../assets/img/coach-zhang.png`)} />
							</Col>
						</Row>
					</Row>
				</Container>
				{/* coach-Zhou */}

				<Container className="mb-5">
					<Row>
						<Col xs={12} md={5}>
							<Card.Img className="coachImage" src={require(`../assets/img/coach-zhou.png`)} />
						</Col>

						<Col xs={12} md={7}>
							<p className="content">{t('aboutUs.coachZhou.para1')}
								<br /><br />{t('aboutUs.coachZhou.para2')}
								<br /><br />{t('aboutUs.coachZhang.tel')}
							</p>
						</Col>
					</Row>
				</Container>

				{/* coach-Hao */}
				<Container className="mb-5">
					<Row>
						<Col xs={12} md={7}>
							<p className="content">{t('aboutUs.coachHao.para1')}
								<br /><br />{t('aboutUs.coachHao.para2')}
								<br /><br />{t('aboutUs.coachHao.tel')}
							</p>
						</Col>
						<Col xs={12} md={5}>
							<Card.Img className="coachImage" src={require(`../assets/img/coach-hao.png`)} />
						</Col>
					</Row>
				</Container>
			</div >
		);
	}
}

export default withTranslation()(AboutUs);