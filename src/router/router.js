import Home from '../View/Home.vue'
import ContentLeft from '../View/profile/contentLeft.vue'
import favoriteJob from '../components/profile/favoriteJob.vue'
import contentHome from '../View/profile/ContentHome.vue'
import SaveJob from '../components/profile/SaveJob.vue'
import JobApplied from '../components/profile/JobApplied.vue'
import jobNotification from '../components/profile/jobNotification.vue'
export const routes = [
    {path:'/' ,name:'Home',component:Home,children :[
        {path:'profile',name:'profile',component:contentHome,children:[
            {path:'',name:'contentProfile',component:ContentLeft},
            {path:'favoriteJob',name:'favoriteJob',component:favoriteJob},
            {path:'saveJob',name:'saveJob',component:SaveJob},
            {path:'JobApplied',name:'JobApplied',component:JobApplied},
            {path:'jobNotification',name:'jobNotification',component:jobNotification}
        ]}
    ]}
]