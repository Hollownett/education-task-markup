import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  BOARDS_ROUTE,
  ACTIVITY_ROUTE,
  PROFILE_SETTIGNS,
} from '@/constants'

import Loader from '@/components/Loader'
import SignInPage from '@/pages/SignIn'
import SignUpPage from '@/pages/SignUp'
import Boards from '@/pages/Boards'
import HomePage from '@/pages/Home'
import Activity from '@/pages/Activity'
import ProfileSettigns from '@/pages/Profile'

export default () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route path={HOME_PAGE_ROUTE} component={HomePage} />
      <Route
        exact
        path={SIGN_IN_ROUTE}
        component={SignInPage}
      />
      <Route path={SIGN_UP_ROUTE} component={SignUpPage} />
      <Route path={BOARDS_ROUTE} component={Boards} />
      <Route path={ACTIVITY_ROUTE} component={Activity} />
      <Route path={PROFILE_SETTIGNS} component={ProfileSettigns} />
    </Switch>
  </Suspense>
)
