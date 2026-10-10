import { mount } from './mount'
import { pageFor } from './pages'
import './reset.css'
import './index.css'

mount(pageFor(window.location.pathname))
