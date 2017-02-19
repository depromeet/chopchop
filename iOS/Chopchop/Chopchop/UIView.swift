//
//  UIView.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 17..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

extension UIView {
    func addConstraints(with format: String, views: UIView...) {
        var viewsDictionary = [String: UIView]()
        for (index, view) in views.enumerated() {
            let key = "v\(index)"
            view.translatesAutoresizingMaskIntoConstraints = false
            viewsDictionary[key] = view
        }
        addConstraints(NSLayoutConstraint.constraints(withVisualFormat: format, options: NSLayoutFormatOptions(), metrics: nil, views: viewsDictionary))
    }
}
