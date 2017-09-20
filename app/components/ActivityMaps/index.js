/**
 *
 * ActivityMaps
 *
 */

import React from 'react';
// import styled from 'styled-components';
import Flexbox from 'flexbox-react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PeriodicTable from '../PeriodicTable';
import ActivityMapOER from '../ActivityMapOer';
import StructureView from '../StructureView';

class ActivityMaps extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <Flexbox flexDirection="column" minHeight="100vh">
            <Flexbox height="25px">
            <span>Choose Reaction</span>
            <select>
            <option>HER (2 structures)</option>
            <option>OER (4 structures)</option>
            <option>ORR</option>
            <option>CO oxidation (2 structures)</option>
            <option>CO2RR (6+ structures)</option>
            <option>Ammonia</option>
            </select>
            </Flexbox>
            <Flexbox height="500px">
            <PeriodicTable />
            </Flexbox>
            <div>
            <Flexbox height="900px" width="100%">
            <ActivityMapOER />
            </Flexbox>
            <Flexbox height="600px">
            <StructureView />
            </Flexbox>

            </div>
            </Flexbox>
        );
    }
}

ActivityMaps.propTypes = {

};

export default ActivityMaps;
