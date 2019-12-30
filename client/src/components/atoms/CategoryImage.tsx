import React, { PureComponent } from 'react'
import cx from 'classnames'
import styles from './CategoryImage.module.scss'

import Energy_Enviroment from '../../img/categories/green-energy.jpg';
import Food from '../../img/categories/Fruitsveggies.jpg';
import Shelter from '../../img/categories/shelter.png';
import Space from '../../img/categories/space.jpg';
import Water from '../../img/categories/water.jpg';
import Disaster_Resilience_Governance_Learning from '../../img/categories/data.jpg';
import Prosperity from '../../img/categories/prosperity.jpg'
import Security from '../../img/categories/security.jpg'
import Health from '../../img/categories/health.jpg'
import Energy from "../../img/categories/solar-panels.jpg"
import aiforgood from '../../img/categories/artifical_intelligence.jpg'

// Energy Environment
// Food
// Shelter
// Space
// Water
// Disaster Resilience Governance Learning
// Prosperity
// Security
// Health

const categoryImageFile = (category: string) => {
	switch (category) {
		// case " Food":
		// case "Shelter":
		// case "Space":
		// case "Water":
			case "Energy Environment":
			return Energy_Enviroment

		// case 'AI':
		// case "Blockchain":
		// case "IoT":
		// case "AR/VR":
		// case "Bio-Tech":
		// case "3D Printing":
		// case "Data Analytics":
		// case "Drones & Robotics":
		// case "Remote Sensing":
		// case "Geo-spacial Tech":
		case 'Health':
			return Health

		// case 'Blockchain':
		// case "IoT":
		// case "AR/VR":
		// case "Bio-Tech":
		// case "3D Printing":
		// case "Data Analytics":
		// case "Drones & Robotics":
		// case "Remote Sensing":
		// case "Geo-spacial Tech":
		// case "Food tracebility data":
		// case "Farming & Logistics IoT data":
		// case "AR on-demand expert for farming":
		// case "Biotech, nanotech data on food shelve life enhancement, increasing yields & improving nutrition":
		// case "3D Printing of cultured meat":
		// case "Food Data Analytics":
		// case "Drones & Robotics for farming":
		// case "Remote Sensing for farming e.g soil & water analysis":
		// case "Geo-spacial Tech for farming e.g soil & water analysis":
			case "Food":
		 	return Food

		case 'Space':
			return Space

		case 'Water':
		
			return Water

		// case "Peer-to-peer Energy Trading Platform data":
		// case "Energy IoT data":
		// case "AR Remote Assistance data":
		// case "Wind Turbine Hardware Market data":
		// case "Grid Analytics":
		// case "Drone solar panel thermal inspection and wind turbine inspection":
		// case "Remote Sensing info in determining solar and wind energy production potential":
		// case "Geo-spacial mapping and planning data":
			case "Energy":
			return Energy

		case 'Prosperity':
	
			return Prosperity

		case 'Security':
			return Security

		
		case 'Shelter':
			return Shelter

			case "Disaster Resilience Governance Learning":
				return Disaster_Resilience_Governance_Learning

		// technically no category
		// but corresponding to title of a channel
		case 'AI For Good':
			return aiforgood
		default:
			return aiforgood
	}
}

export default class CategoryImage extends PureComponent<{
	category: string
	header?: boolean
	dimmed?: boolean
}> {
	public render() {
		const image = categoryImageFile(this.props.category)
		const classNames = cx(styles.categoryImage, {
			[styles.header]: this.props.header,
			[styles.dimmed]: this.props.dimmed
		})

		return (
			<div
				className={classNames}
				style={{ backgroundImage: `url(${image})` }}
			/>
		)
	}
}

// THE AUGER DATA MARKETPLACE
// SUMMARY
// GLOBAL GRAND CHALLENGES
// The Global Grand Challenges are an adaptation from Singularity University and represent what is well known as the SDG's by the UN. However there is a strong emphasis on Space Explorations as it comes up as a stand alone Goal.

// Energy Environment
// Food
// Shelter
// Space
// Water
// Disaster Resilience Governance Learning
// Prosperity
// Security
// Health

// ENERGY ai data
// AI.
// Blockchain.
// IoT.
// AR/VR.
// Bio-Tech.
// 3D Printing.
// Data Analytics.
// Drones & Robotics.
// Remote Sensing.
// Geo-spacial Tech.

// Peer-to-peer Energy Trading Platform data.
// Energy IoT data.
// AR Remote Assistance data.
// Wind Turbine Hardware Market data.
// Grid Analytics.
// Drone solar panel thermal inspection and wind turbine inspection.
// Remote Sensing info in determining solar and wind energy production potential.
// Geo-spacial mapping and planning data.
// Food ai data
// AI.
// Blockchain.
// IoT.
// AR/VR.
// Bio-Tech.
// 3D Printing.
// Data Analytics.
// Drones & Robotics.
// Remote Sensing.
// Geo-spacial Tech.
// Battery Tech.
// AI.
// Food tracebility data.
// Farming & Logistics IoT data.
// AR on-demand expert for farming.
// Biotech, nanotech data on food shelve life enhancement, increasing yields, improve nutrition.
// 3D Printing of cultured meat.
// Data Analytics.
// Drones & Robotics for farming.
// Remote Sensing for farming e.g soil & water analysis.
// Geo-spacial Tech for farming e.g soil & water analysis.
// Enter
// Blockchain.
// IoT.
// AR/VR.
// 3D Printing.
// Data Analytics.
// Drones & Robotics.
// Remote Sensing.
// Geo-spacial Tech.
// ENERGY ai data
// Peer-to-peer Energy Trading Platform.
// Energy IoT.
// AR Remote Assistance.
// Wind Turbine Hardware Market.
// Grid Analytics.
// Drone solar panel thermal inspection and wind turbine inspection.
// Remote Sensing info in determining solar and wind energy production potential.
// Geo-spacial mapping and planning data.
// Food ai data
// Blockchain.
// IoT.
// AR/VR.
// Bio-Tech.
// 3D Printing.
// Data Analytics.
// Drones & Robotics.
// Remote Sensing.
// Geo-spacial Tech.
// Food tracebility data.
// Farming & Logistics IoT data.
// AR on-demand expert for farming.
// Biotech, nanotech data on food shelve life enhancement, increasing yields & improving nutrition.
// 3D Printing of cultured meat.
// Food Data Analytics.
// Drones & Robotics for farming.
// Remote Sensing for farming e.g soil & water analysis.
// Geo-spacial Tech for farming e.g soil & water analysis.
// SUMMARY
// CORPORATE FUNCTIONS
// The corporate functions are the typical division you will find in medium to large organizations.

// Our stated SGD:8 primary target includes improved productivity, increased business expansion, improved business management practices and entrepreneurial skills, increased formalization, improved working conditions, and increased income from the business. Stakeholder target: clients & the environment. the stakeholder's characteristics: (demographics) impact ventures, owned by - all-inclusive, (socio-economics) all-inclusive: (setting) rural, urban & peri-urban (geography), all-inclusive.

// functions
// enter
// legal
// legal ai data
// regulatory compliance.

// contract management.

// hr
// hr ai data
// employee culture management.

// employee engagement.

// talent optimization.

// ethics
// hr ai data
// employee culture management.

// employee engagement.

// talent optimization.

// finance
// finance ai data
// bookkeeping.

// cryptocurrency based funding.

// cashflow management.

// sales
// sale ai data
// churn prediction.

// lead prioritization.

// customer service.

// procurement
// procurement ai data
// spend analysis.

// market risks.

// contract management.

// facilities
// facilities ai data
// smart office data

// virtual office data

// risk
// Risk ai data
// industry risk analysis

// communications
// communications ai data
// market trend analysis

// negative feedback on the web

// R&D
// R&D ai data
// regulatory compliance.

// contract management.

// production
// production ai data
// on-demand production/ manufacturing

// 3D printing data

// logistics
// logistics ai data
// route planning

// fleet analytics

// customer service
// customer service ai data
// Chat-bots

// Marketing
// marketing ai data
// rmarket segmentation.

// web analytics.

// market intelligence.

// exponential technologies
// EXPONeNTIAL TECHNOLOGIES
// Exponential Technology
// enter
// Drones
// drone ai data
// food

// energy

// disaster resilience

// environment

// security

// health

// water

// IoT & Sensors
// sensors ai data
// energy

// disaster resilience

// environment

// security

// health

// water

// food

// AR/VR
// vr/ar ai data
// energy

// disaster resilience

// security

// health

// water

// food

// environment

// Contact Us
// Contact Us
// head office
// 71 Waterkant Street Cape Town 8001
// Tel: +2782 998 7879
// bngejane@gmail.com
// Reg: Kayman Investments 1984 (Pty) Ltd
// Co Reg: 2014/157959/07
// Nano-tech
// nano-tech ai data
// energy

// disaster resilience

// security

// health

// water

// food

// environment

// blockchain
// blockchain ai data
// energy

// disaster resilience

// environment

// security

// health

// water

// food

// 3D Printing
// 3D printing ai data
// energy

// disaster resilience

// environment

// security

// health

// water

// food

// Robotics
// robotics ai data
// energy

// disaster resilience

// security

// health

// water

// food

// environment

// Remote Sensing
// remote sensing ai data
// energy

// disaster resilience

// security

// health

// water

// food

// environment

// Geo-Spacial
// geo-spatial ai data
// energy

// disaster resilience

// security

// health

// water

// food

// environment

// X-Prize
// Future of Food Grand Challenge