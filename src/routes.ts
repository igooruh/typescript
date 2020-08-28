import { Request, Response } from 'express';

import createUser from './services/CreateUsers';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'igooruh@gmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'javascript', experience: 100}
        ],
        softSkills: [
            'Intelligent',
            'Proactive',
            'Smiling'
        ]
    });

    return response.status(200).json({ message: "Tá OK!" });
}