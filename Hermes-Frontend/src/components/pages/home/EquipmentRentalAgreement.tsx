// EquipmentRentalAgreement.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const EquipmentRentalAgreement = () => {
  return (
    <Card className="max-w-4xl mx-auto my-8 p-6">
      <CardContent className="space-y-6 text-base text-gray-700">
        <h1 className="text-2xl font-bold text-center">
          VIVARENT LLC EQUIPMENT RENTAL AGREEMENT
        </h1>

        <p>
          This Equipment Rental Agreement (this "Agreement"), dated as of{" "}
          <strong>05/07/2025</strong>, is entered into by and between the
          individual user listing the equipment for rental through the Vivarent
          LLC platform (“Lessor”), and the individual user renting the equipment
          through the Vivarent LLC platform (“Lessee”) (collectively, the
          “Parties” and each, a “Party”).
        </p>

        <p>
          <strong>WHEREAS</strong>, Vivarent, LLC (“Vivarent”) provides a
          platform that allows individuals to rent equipment to and from one
          another;
        </p>
        <p>
          <strong>WHEREAS</strong>, Lessor has listed certain equipment for
          rental on the Vivarent platform; and
        </p>
        <p>
          <strong>WHEREAS</strong>, Lessee desires to rent such equipment from
          Lessor for a limited term.
        </p>
        <p>
          <strong>NOW, THEREFORE</strong>, in consideration of the mutual
          covenants contained herein, the Parties agree as follows:
        </p>

        <div>
          <h2 className="text-lg font-semibold">1. Equipment</h2>
          <p>
            Lessor agrees to lease the equipment identified in the Vivarent
            listing and rental confirmation (collectively the “Units,” and each,
            a “Unit”) to Lessee for temporary use. Lessee accepts the Units
            subject to this Agreement and agrees to use them solely for lawful
            purposes and in accordance with the terms of this Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">2. Delivery Location</h2>
          <p>Vivarent will arrange for the pickup and delivery of the Unit(s) in one of two ways:</p>
          <ul className="list-decimal list-inside pl-4 space-y-1">
            <li>
              By placing the Unit(s) at a designated Vivarent drop location for Lessee to retrieve
            </li>
            <li>
              By delivering the Unit(s) directly to the Lessee’s provided address
            </li>
          </ul>
          <p>
            Before making the Unit(s) available for pickup or delivery, Vivarent will inspect
            the Unit(s) to confirm they are in working condition. The Lessor must provide the
            Unit(s) to Vivarent’s designated collection partner as instructed.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">3. Delivery Date</h2>
          <p>
            The estimated delivery date is as communicated in the Vivarent rental confirmation.
            Lessor and Vivarent will use reasonable efforts to make the Unit(s) available by that
            date, but Vivarent is not liable for any delays in pickup or delivery availability.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">4. True Lease</h2>
          <p>
            The Parties intend that this Agreement shall constitute a true lease under applicable law.
            Title to the Unit(s) remains with Lessor at all times. Lessee does not acquire any ownership
            or equitable interest in the Units other than its leasehold interest solely as a lessee subject
            to the terms and conditions of this Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">5. Net Lease</h2>
          <p>
            This is a net lease. Lessee is responsible for all obligations during the rental period,
            including risk of loss and damage, unless otherwise agreed.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">6. No Setoff</h2>
          <p>
            Except as expressly provided in this Agreement, Lessee’s payment obligations are not subject
            to any abatement, counterclaim, defense, deferment, interruption, recoupment, reduction, or setoff.
            Notwithstanding the foregoing, Lessee shall be entitled to a refund in the event the Unit(s) fail
            Vivarent’s inspection prior to delivery as described in Section 15.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">7. Commencement Date</h2>
          <p>
            The “Commencement Date” is either the date the Unit(s) are available at the designated Vivarent
            drop point for Lessee’s pickup or the date the Unit(s) are delivered to Lessee’s address.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">8. Expiration Date</h2>
          <p>
            The “Expiration Date” is the date specified in the rental confirmation or as otherwise extended
            by mutual agreement through the Vivarent platform.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">9. Rent</h2>
          <p>
            Lessee shall pay in full, at the time of booking through the Vivarent platform, the fixed rental
            amount indicated in the Vivarent listing plus any additional charges included by Vivarent in
            facilitating the transaction, including:
          </p>
          <ul className="list-decimal list-inside pl-4 space-y-1">
            <li>
              <strong>Service Charge:</strong> The additional charge applied by Vivarent for facilitating
              the transaction, as incorporated into the Vivarent listing visible to Lessee and reflected in
              the billing statement for the transaction.
            </li>
            <li>
              <strong>Surcharge:</strong> An additional charge of $15 applicable to any transaction on the
              Vivarent platform that totals less than $50 (fifty dollars), including any Vivarent Service Charge.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">10. Payment Mechanics</h2>
          <p>
            All payments shall be made through Vivarent’s platform in U.S. dollars using the payment method on file.
            Lessee authorizes Vivarent to charge the account for rental fees and any other applicable charges in accordance with this Agreement.
            Payment due to the Lessor for a Unit’s rental will be processed and disbursed by Vivarent within 3 (three) business days after the equipment has successfully passed Vivarent’s inspection process pursuant to this Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">11. Late Payments</h2>
          <p>
            If Lessee returns the Unit(s) late, Vivarent may charge a late fee as stated in the platform's rental policy or listing. 
            Repeated lateness may result in additional fees or account suspension.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">12. Exclusion of Warranties</h2>
          <p>
            LESSOR PROVIDES THE EQUIPMENT “AS IS.” VIVARENT MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
          </p>
        </div>
        <div>
  <h2 className="text-lg font-semibold">13. Lessor’s Representations</h2>
  <p>Lessor represents that:</p>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Lessor has the authority to enter into this Agreement.</li>
    <li>
      All Unit(s) Lessor lists for rental through the Vivarent platform are in
      good working order and fit for the ordinary purpose for which such
      equipment is intended.
    </li>
    <li>
      Lessor has not listed equipment that is known to be defective or
      materially compromised.
    </li>
  </ul>
</div>

<div>
  <h2 className="text-lg font-semibold">14. Lessor’s Responsibility for Failed Inspection</h2>
  <p>
    Before a Unit is made available to a Lessee, Vivarent will conduct an inspection to verify that the Unit is in
    functional condition as represented by the Lessor under Section 13 of this Agreement. If a Unit fails Vivarent’s
    inspection due to the Lessor’s failure to provide Unit(s) in functional condition as represented, Lessor may be
    subject to penalties, including removal of the listing, withholding of payments, and potential suspension from the
    platform. Vivarent may also seek reimbursement from Lessor for any refunds or transaction costs incurred as a
    result of the failed inspection, including costs incurred in picking up the Unit(s).
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold">15. Refund for Failed Inspection</h2>
  <p>
    If, during the inspection conducted by Vivarent, any Unit is determined to be non-functional or materially deficient, Vivarent will notify the Lessee and cancel the rental for the affected Unit(s). In such case, Lessee will receive a full refund of the rental amount paid for the non-functional Unit(s), including any associated additional charges. This refund will be issued to the original payment method within a reasonable time following cancellation.
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold">16. Disposition of Equipment After Failed Inspection</h2>
  <p>
    If any Unit fails Vivarent’s inspection and is not delivered to the Lessee, the Lessor shall be responsible for retrieving
    the Unit(s) from a Vivarent-designated drop location within 5 (five) business days of receiving notice. If the Lessor does not
    retrieve the Unit(s) within this period, Vivarent may return the Unit to the Lessor’s address on file and charge a return
    delivery fee. Vivarent shall not be liable for storage, loss, or damage to Unit(s) left unclaimed for more than 5 (five) days
    following notice of failed inspection.
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold mt-6">17. Lessee’s Representations</h2>
  <ul className="list-disc list-inside">
    <li>Lessee has the authority to enter into this Agreement.</li>
    <li>Lessee will use the Equipment in a responsible and lawful manner.</li>
    <li>
      Lessee has reviewed any relevant safety or usage instructions provided by
      Lessor or Vivarent.
    </li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mt-6">18. Lessee’s Covenants</h2>
  <ul className="list-disc list-inside">
    <li>Use the Unit(s) only for lawful purposes.</li>
    <li>Comply with all applicable laws.</li>
    <li>Be financially responsible for damage, loss, or misuse of the Unit(s).</li>
    <li>Not sublease or assign use of the Unit(s) to third parties without consent of Lessor through the Vivarent platform.</li>
  </ul>
</div>

<div>
  <h2 className="text-lg font-semibold mt-6">19. Lessee’s Use of Equipment</h2>
  <p>
    Lessee shall not modify, damage, or mark the Unit(s) without Lessor’s written consent. Lessee shall use the Unit(s) in accordance with any stated purpose in the listing and return the Equipment in the condition received, normal wear and tear excepted.
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold mt-6">20. Maintenance and Mandatory Modifications</h2>
  <p>
    Lessee is responsible for the care of the Unit(s) during the rental term. No alterations or repairs may be made without Lessor’s prior approval. If repair or replacement is required due to Lessee's use of the Unit(s), Lessee will bear the cost.
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold mt-6">21. Loss</h2>
  <p>
    Lessee assumes the risk of loss or damage from the time the Unit(s) is made available for pickup to the time it is returned.
    Lessee shall promptly report any incidents and may be responsible for the replacement cost as listed.
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold mt-6">22. Insurance</h2>
  <p>
    The Parties acknowledge that Vivarent does not provide insurance.
  </p>

  <h2 className="text-lg font-semibold mt-6">23. Default</h2>
  <p>Each of the following events is an “Event of Default” under this Agreement:</p>
  <ul className="list-disc ml-6 mt-2 space-y-1">
    <li>Lessee fails to pay any rent or any other amount under this Agreement when due.</li>
    <li>Lessee defaults in the observance of any other term, covenant, or condition of this Agreement on Lessee’s part to be observed or performed, and Lessee fails to remedy such default within five (5) business days after notice by Lessor to Lessee of such default.</li>
    <li>Lessee’s interest or any portion thereof in this Agreement devolves on or passes to any other party, whether by operation of law or otherwise.</li>
    <li>
      Lessee (i) becomes insolvent, (ii) is generally unable to pay, or fails to pay, its debts as they become due, or (iii) files, or has filed against it,
      a petition for voluntary or involuntary bankruptcy.
    </li>
  </ul>
  <p className="mt-2">
    If an Event of Default occurs, Lessor and/or Vivarent may charge additional fees, suspend access to the Unit(s) and/or Vivarent platform,
    proceed by court action to enforce performance by Lessee of this Agreement and/or to recover all damages and expenses incurred by Lessor
    by reason of any Event of Default, and exercise any other right or remedy available to Lessor at law, in equity, or by statute.
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold mt-6">24. Indemnification</h2>
  <p>
    Lessee shall indemnify, defend, and hold harmless Lessor and Vivarent, and their successors and assigns, against any and all losses, injury, death,
    damages, liabilities, claims, deficiencies, actions, judgments, interest, awards, penalties, fines, costs, or expenses of whatsoever kind in nature,
    including reasonable attorneys’ fees and the cost of enforcing any right to indemnification under this Agreement, arising out of Lessee’s use, misuse, or
    possession of the Unit(s).
  </p>

  <h2 className="text-lg font-semibold mt-6">25. Lessor’s Performance of Lessee's Obligations</h2>
  <p>
    If Lessee causes an Event of Default, fails to return the Unit(s), or otherwise breaches this Agreement, Lessor may request assistance from Vivarent to
    collect the Unit(s) or assess penalties.
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold mt-6">26. Return of Unit(s)</h2>
  <p>
    Lessee must have the Unit(s) ready to be picked up by Vivarent’s designated collection partner by the Expiration Date in the same condition it was
    received, normal wear and tear excepted. Holdover charges may apply for late returns.
  </p>
</div>

<div>
      <h2 className="text-xl font-semibold mt-6">26. Return of Unit(s)</h2>
      <p className="mt-2">
        Lessee must have the Unit(s) ready to be picked up by Vivarent’s designated collection partner by the Expiration Date in the same condition it was
        received, normal wear and tear excepted. Holdover charges may apply for late returns.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-semibold mt-6">27. Renewal Option</h2>
      <p className="mt-2">
        Provided that no Event of Default shall have occurred and be continuing, Lessee may request to extend the rental term through the Vivarent platform. 
        Renewal is subject to Lessor’s approval and may require additional payment.
      </p>
    </div>

    <div>
      {/* Section 28 */}
      <h2 className="text-xl font-semibold mt-6">28. Lessee Cooperation to Return</h2>
      <p className="mt-2">
        If Lessee does not extend the rental term of the Unit(s), Lessee agrees to have the Unit(s) ready for pickup by the Expiration Date, 
        and to allow Vivarent to facilitate inspection or pickup by other users if requested.
      </p>

      {/* Section 29 */}
      <h2 className="text-xl font-semibold mt-6">29. Miscellaneous</h2>
      <ul className="mt-2 list-inside list-disc">
        <li><strong>Communication:</strong> All communication shall be made through the Vivarent platform or contact information on file.</li>
        <li><strong>Governing Law:</strong> This Agreement, and all claims or causes of action (whether in contract, tort or statute) that may be based upon, arise out of or relate to this Agreement, or the negotiation, execution or performance of this Agreement (including any claim or cause of action based upon, arising out of or related to any representation or warranty made in or in connection with this Agreement or as an inducement to enter into this Agreement), shall be governed by, and enforced in accordance with, the internal laws of the State of Minnesota, including its statutes of limitation and excluding its conflicts of law rules. All claims or causes of action based upon, arising out of, or relating to this Agreement shall be brought solely in the state or federal courts located in Minnesota, and each Party irrevocably submits themselves to the jurisdiction of such courts for such purposes.</li>
        <li><strong>Force Majeure:</strong> No Party shall be liable or responsible to the other Party, or be deemed to have defaulted under or breached this Agreement, for any failure or delay in fulfilling or performing any term of this Agreement (except for any obligations of Lessee to make payments to Lessor hereunder), when and to the extent such failure or delay is caused by results from acts beyond the impacted party’s reasonable control, including, without limitation, acts of God, flood, fire, earthquake, war, invasion, strikes, or terrorism.</li>
        <li><strong>Assignment:</strong> This Agreement is binding on the Parties and may not be assigned without written consent.</li>
        <li><strong>Severability:</strong> Every provision of this Agreement will be construed, to the extent possible, so as to be valid and enforceable. If any provision of this Agreement so construed is held by a court of competent jurisdiction to be invalid, illegal or otherwise unenforceable, such provision will be deemed severed from this Agreement, and all other provisions will remain in full force and effect.</li>
      </ul>

      {/* Section 30 */}
      <h2 className="text-xl font-semibold mt-6">30. Electronic Signature and Agreement to Terms</h2>
      <p className="mt-2">
        By completing the rental transaction through the Vivarent platform, including submitting a request, accepting a rental, and processing payment, both Parties acknowledge and agree to be bound by the terms of this Agreement. 
        Completion of the transaction on the Vivarent website shall constitute each party’s electronic signature to this Agreement, and shall have the same force and effect as a handwritten signature.
      </p>
    </div>
      </CardContent>
    </Card>
  );
};

export default EquipmentRentalAgreement;
