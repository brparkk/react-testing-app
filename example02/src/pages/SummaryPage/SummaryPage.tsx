import React, { useEffect, useState } from "react";

function SummaryPage() {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <h2>주문 확인</h2>
      <div>
        <p>
          Products: <span>₩1,000</span>
        </p>
        <ol>
          <li>
            <span>Product 1</span>
          </li>
        </ol>
      </div>
      <input
        type="checkbox"
        id="confirm-order"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="confirm-order">주문하려는 것을 확인하셨나요?</label>
      <button type="submit" disabled={!checked}>
        주문 확인
      </button>
    </form>
  );
}

SummaryPage.propTypes = {};

export default SummaryPage;
