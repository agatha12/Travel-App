import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  )
}

export function SelectDate(props) {
  return ( 
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  )
}

export function Hour(props) {
  return (

    <select {...props}>
      <option></option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>

  )
}

export function Minute(props) {
  return (

    <select {...props}>
      <option></option>
      <option>00</option>
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>
      <option>26</option>
      <option>27</option>
      <option>28</option>
      <option>29</option>
      <option>30</option>
      <option>31</option>
      <option>32</option>
      <option>33</option>
      <option>34</option>
      <option>35</option>
      <option>36</option>
      <option>37</option>
      <option>38</option>
      <option>39</option>
      <option>40</option>
      <option>41</option>
      <option>42</option>
      <option>43</option>
      <option>44</option>
      <option>45</option>
      <option>46</option>
      <option>47</option>
      <option>48</option>
      <option>49</option>
      <option>50</option>
      <option>51</option>
      <option>52</option>
      <option>53</option>
      <option>54</option>
      <option>55</option>
      <option>56</option>
      <option>57</option>
      <option>58</option>
      <option>59</option>

    </select>

  )
}


export function Timezone (props) {
  return (
    <select {...props}>
      <option></option>
      <option>AM</option>
      <option>PM</option>
    </select>
  )
}

export function Container(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

export function FormButton(props) {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export function DeleteButton(props) {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export function ItineraryButton(props) {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}