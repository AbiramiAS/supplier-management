function AddPayments() {
          return (
            <>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#paymentModal"
              >
                Add Payment
              </button>

              <div
                class="modal fade"
                id="paymentModal"
                tabindex="-1"
                aria-labelledby="paymentModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h6 class="modal-title" id="paymentModalLabel">
                        Add Payment
                      </h6>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                                                            <div class="modal-body">
                                                                      
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
}

export default AddPayments