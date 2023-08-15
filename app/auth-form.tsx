'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_up"
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
            brand: 'hsl(153 60.0% 53.0%)',
            brandAccent: 'hsl(154 54.8% 45.1%)',
            brandButtonText: 'white',
            // ..
            },
        },
        dark: {
            colors: {
            brandButtonText: 'white',
            defaultButtonBackground: '#2e2e2e',
            defaultButtonBackgroundHover: '#3e3e3e',
            //..
            },
        },
        // You can also add more theme variations with different names.
        evenDarker: {
            colors: {
            brandButtonText: 'white',
            defaultButtonBackground: '#1e1e1e',
            defaultButtonBackgroundHover: '#2e2e2e',
            //..
            },
        },
        },
      }}
      theme="dark"
      showLinks={false}
      providers={["google"]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  )
}