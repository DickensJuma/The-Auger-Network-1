import React, { PureComponent } from 'react'
import cx from 'classnames'
import styles from './CategoryImage.module.scss'

import Energy_enviroment from '../../img/categories/green-energy.jpg'
import Food from '../../img/categories/Fruitsveggies.jpg'
import Shelter from '../../img/categories/shelter.png'
import Space from '../../img/categories/space.jpg'
import Water from '../../img/categories/water.jpg'
import Disaster_Resilience_Governance_Learning from '../../img/categories/data.jpg'
import Prospertity from '../../img/categories/prosperity.jpg'
import Security from '../../img/categories/security.jpg'
import Health from '../../img/categories/health.jpg'
import aiforgood from '../../img/categories/artifical_intelligence.jpg'

const categoryImageFile = (category: string) => {
    switch (category) {
        case "Physics & Energy":
        case 'Agriculture & Bio Engineering':
            return Energy_enviroment

        case 'Food':
        case 'Biology':
            return Food

        case 'Space & Astronomy':
            return Space

        case 'Water':
        case '"Urban Planning"':
            return Water

         case 'Dataset Of Datasets':
       
            return Disaster_Resilience_Governance_Learning

        case 'Properity':
        case 'Business & Management':
            return Prospertity
       
        case 'Dataset Of Datasets':
            return Security
        
        case 'Health & Medicine':
            return Health

            case 'Urban Planning':
                return Shelter
       
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
