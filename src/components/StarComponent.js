import React from "react";

//Changes stars based on rating, with rating pulled from the mapped jsx
export default function StarComponent(rating) {
    if (rating === 1) {
        return (
            <>
                <i className="fa fa-star"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </>
        );
    }
    if (rating === 2) {
        return (
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </>
        );
    }
    if (rating === 3) {
        return (
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </>
        );
    }
    if (rating === 4) {
        return (
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </>
        );
    }
    if (rating === 5) {
        return (
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </>
        );
    }
}
