export const attributes = [
    { 
        id: 'timeofday', 
        text: 'Time',
        color: '#C16C3E',
        type: 'slider',
        options: {
            min: 0,
            max: 24,
            step: 1,
        }
    },
    { 
        id: 'weather', 
        text: 'Weather',
        color: '#3E93C1',
        type: 'dropdown',
        subAttributes: ['Sunny', 'Rainy', 'Cloudy', 'Snowy'],
        
    },
    { 
        id: 'climate', 
        text: 'Climate',
        color: '#45BA98',
        type: 'dropdown',
        subAttributes: ['Tropical', 'Temperate', 'Arid', 'Polar'],
    },
    { 
        id: 'terrain', 
        text: 'Terrain',
        color: '#45BA98',
        type: 'dropdown',
        subAttributes: ['Desert', 'Lush', 'Tundra', 'Mountain'],
    },
    { 
        id: 'temperature', 
        text: 'Temperature',
        color: '#BA4567',
        type: 'slider',
        options: {
            min: -20,
            max: 120,
            step: 1,
        }
    },
    { 
        id: 'humidity', 
        text: 'Humidity',
        color: '#BA4567',
        type: 'slider',
        options: {
            min: 0,
            max: 100,
            step: 1,
        }
    },
    { 
        id: 'wind', 
        text: 'Wind',
        color: '#BA4567',
        type: 'slider',
        options: {
            min: 0,
            max: 50,
            step: 1,
        }
    },
    { 
        id: 'clouds', 
        text: 'Clouds',
        color: '#BA4567',
        type: 'dropdown',
        subAttributes: ['Clear', 'Partly Cloudy', 'Cloudy', 'Overcast'],
    },
    { 
        id: 'visibility', 
        text: 'Visibility',
        color: '#BA4567',
        type: 'slider',
        options: {
            min: 0,
            max: 10,
            step: 1,
        }
    }]

