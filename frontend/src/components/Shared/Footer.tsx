import { Fragment } from 'react'
import { socialMedia } from '@/constants'

const Footer = () => {
  return (
    <footer className="bg-[#212529] py-4">
      <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-400">
        <div>
          <p>Follow us on social media</p>
          <div className="flex justify-center md:justify-start gap-3 cursor-pointer my-2.5">
            {socialMedia.map((media) => {
              const Icon = media.icon
              return (
                <Fragment key={media.name}>
                  <Icon className="text-sm hover:text-white transition-colors duration-200" />
                </Fragment>
              )
            })}
          </div>
        </div>

        <div>
          <ul className="flex gap-3">
            <li>
              <a className="text-sm hover:text-white transition-colors duration-200" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-white transition-colors duration-200" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-white transition-colors duration-200" href="#">
                Cookie Policy
              </a>
            </li>
          </ul>
          <p className="mt-2.5 text-center md:text-start">© 2025 YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
