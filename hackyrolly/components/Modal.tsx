import React from 'react'

export default function Modal() {
  return (
    
    <><label htmlFor="my-modal" className="btn btn-secondary absolute right-7 top-2" id="subscribebutton">Subscribe</label><input type="checkbox" id="my-modal" className="modal-toggle" /><div className="modal">
          <div className="modal-box">
              <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="font-bold text-lg">Subscribe Now!</h3>
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Name:</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                  <br></br>
                  <label className="label">
                      <span className="label-text">Email:</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="modal-action">
                  <label htmlFor="my-modal" className="btn btn-secondary">Done</label>
              </div>
          </div>
      </div></>
  )
}
