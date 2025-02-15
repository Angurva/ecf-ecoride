
import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from 'next-auth/react';

export const authOptions = {
    session:{
        strategy: 'jwt',
        maxAge: 60 * 15 ,
    },
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                email: {label:"Email", type:"email"},
                password: {label:"Password", type:"password"},
                
            },
            async authorize (credentials,req){
                if (!credentials)
                {
                    return null
                }
                
                try{
                    const response = await fetch("http://localhost:8000/api/login",{
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers:{
                            "Content-type": "application/json"
                        }
                    })


                    const user = await response.json()

                    if (response.ok && user)
                    {
                        return user
                    }
                    else{
                        return null
                    }

                }
                catch(error){
                    console.error(error.message)
                    return null
                }
            }
        })
    ],
    callbacks:{
        async jwt({user, token}) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({session, token}) {
            session.user = token.user;
            return session;
        },
    },
    
}

