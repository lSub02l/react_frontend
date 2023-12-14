// src/components/SearchPage.js
import React, { useEffect, useState } from 'react'
import WithSubnavigation from '../components/dashboard-nav'
import httpClient from '../utils/httpClient'
import { useNavigate} from 'react-router-dom';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
  useToast,
} from '@chakra-ui/react';

export default function SearchPage() {
    const [travels, setTravels] = useState([])
    const [weather, setWeather] = useState([])
    const [user, setUser] = useState(null)
    const navigation = useNavigate()
    
    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        const {data} = await httpClient.get("/search")
        console.log(data)
    }

    return (
        <div>
        <WithSubnavigation/>
            <VStack marginTop={20} spacing={8} align="center">
            </VStack>
        </div>
  )
}