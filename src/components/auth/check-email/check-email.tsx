import s from './check-email.module.scss'

import { Email } from '@/assets/icons'
import { Button, Card, Typography } from '@/components/ui'

type Props = {
  email: string
}

export const checkEmail = ({ email }: Props) => {
  return (
    <>
      <Card className={s.card}>
        <Typography variant="large" className={s.title}>
          Check Email
        </Typography>
        <div className={s.iconContainer}>
          <Email />
        </div>
        <Typography variant="body2" className={s.caption}>
          We`ve sent an e-mail with instructions to {email}
        </Typography>
        <Button fullWidth={true} as={'a'} href={''}>
          Back to Sign in
        </Button>
      </Card>
    </>
  )
}
