// src/components/DashboardPage.js
import WithSubnavigation from '../components/dashboard-nav'
import httpClient from '../utils/httpClient';
import { useNavigate} from 'react-router-dom';
import {
    Box,
  } from '@chakra-ui/react';

export default function DashboardPage() {
    const backgroundImageURL = '../components/images/maldives.jpg'
    
    return (
    <div>
        <WithSubnavigation/>
        <div class = "image"
        style = {{
            backgroundImage:backgroundImageURL,
            backgroundSize:'contain',
            backgroundRepeat: 'no-repeat'
        }}>

        </div>
    </div>
    );
}